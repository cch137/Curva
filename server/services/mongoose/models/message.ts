import { Schema, model } from 'mongoose'

export default model('Message', new Schema({
  user: { type: String, required: true },
  conv: { type: String, required: true },
  model: { type: String, required: false },
  Q: { type: String, required: true },
  A: { type: String, required: true },
  queries: { type: [String], default: undefined },
  urls: { type: [String], default: undefined },
  more: { type: [String], default: undefined },
  dt: { type: Number, default: undefined },
}, {
  versionKey: false,
  strict: 'throw'
}), 'messages')
