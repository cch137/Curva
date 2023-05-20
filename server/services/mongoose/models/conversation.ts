import { Schema, model } from 'mongoose'

export default model('Conversation', new Schema({
  id: { type: String, required: true },
  name: { type: String }
}, {
  versionKey: false
}), 'conversations')
