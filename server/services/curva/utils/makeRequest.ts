import { getModel } from './models'

export default async function (modelName: string, question: string, context = '') {
  try {
    // @ts-ignore
    const result = await getModel(modelName).findOne({
      attributes: ['answer'],
      where: {
        question: question.replaceAll('\'', '`'),
        context: context.replaceAll('\'', '`')
      }
    }) as { answer: string }
    if (result === null) {
      throw Error('No Answer Found')
    }
    return { answer: result.answer as string }
  } catch (err) {
    const sqlMessage = (err as any)?.original?.sqlMessage as string | undefined
    return { answer: undefined, sqlMessage }
  }
}
