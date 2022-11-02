const { model, Schema } = require('mongoose')

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  duration: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

schema.set('toJSON', {
  transform: (orig, ret) => {
    ret.date = orig.date.toDateString()
    delete ret.__v
  }
})

schema.set('toObject', {
  transform: (orig, ret) => {
    ret.date = orig.date.toDateString()
    delete ret.__v
  }
})

const Exercise = model('Exercise', schema)

module.exports = Exercise