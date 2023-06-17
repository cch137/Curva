import auth from '~/server/services/auth'
import { readBody } from 'h3'
import { parse as parseCookie, serialize as serializeCookie } from 'cookie'
import { read as tokenReader, pack as tokenPacker } from '~/server/services/token'
import type { TokenObject } from '~/server/services/token'

export default defineEventHandler(async function (event) {
  const { req, res } = event.node
  const body = await readBody(event)
  // @ts-ignore
  if (!body) {
    return { error: 'No form' }
  }
  const { usernameOrEmail, password } = body
  // @ts-ignore
  if (!usernameOrEmail || !password) {
    return { error: 'Form incomplete' }
  }
  const rawCookie = req?.headers?.cookie
  const token = tokenReader(parseCookie(typeof rawCookie === 'string' ? rawCookie : '').token) || {} as TokenObject
  const oldUid = token.user
  const oldUidIsExists = oldUid ? auth.getUser(oldUid) : null
  const uid = await auth.getUid(usernameOrEmail, password)
  if (uid) {
    token.user = uid
    if (!(await oldUidIsExists)) {
      try {
        await auth.mergeUser(uid, oldUid)
      } catch {}
    }
  } else {
    return { error: 'The user does not exist or the password is incorrect.' }
  }
  res.setHeader('Set-Cookie', serializeCookie('token', tokenPacker(token), {
    path: '/',
    httpOnly: true,
    sameSite: true,
    secure: true
  }))
  return { error: false }
})
