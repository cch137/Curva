import { message as messagesCollection } from '~/server/services/mongoose'

const getJoinedMessages = (messages: { Q: string, A: string }[]) => {
  return messages.map((message) => {
    return (message.Q ? `Question:\n${message.Q}` : '')
      + (message.Q && message.A ? '\n\n' : '')
      + (message.A ? `Answer:\n${message.A}` : '')
  }).filter((m) => m).join('\n---\n')
}

export default async function (user: string, conv: string) {
  if (!(user && conv)) {
    return ''
  }
  const messages = (await messagesCollection.find({
    user,
    conv
  }, {
    _id: 1,
    Q: 1,
    A: 1
  }).sort({ createdAt: -1 }).limit(100)).map((doc) => ({
    Q: doc.Q,
    A: doc.A,
    t: doc._id.getTimestamp().getTime()
  }))
  if (messages.length === 0) {
    return ''
  }
  let joinedMessages = getJoinedMessages(messages)
  while (joinedMessages.length > 8192) {
    messages.shift()
    joinedMessages = getJoinedMessages(messages)
  }
  return `Conversation history\n===\n${joinedMessages}`
}