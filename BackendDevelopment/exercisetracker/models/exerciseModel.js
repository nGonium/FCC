const { model, Schema } = require('mongoose')

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    default: new Date().toDateString(),
  },
})

schema.set('toJSON', {
  transform: (orig, ret) => {
    delete ret.__v
  }
})

const Exercise = model('Exercise', schema)

module.exports = Exercise