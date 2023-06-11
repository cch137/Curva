import { Schema, model } from 'mongoose'

export default model('Message', new Schema({
  user: { type: String, required: true },
  conv: { type: String, required: true },
  Q: { type: String, required: true },
  A: { type: String, required: true },
  queries: { type: [String], default: undefined },
  urls: { type: [String], default: undefined },
  more: { type: [String], default: undefined },
  dt: { type: Number, default: undefined },
  model: { type: String, default: undefined }, // deprecated!
}, {
  versionKey: false,
  strict: 'throw'
}), 'messages')
