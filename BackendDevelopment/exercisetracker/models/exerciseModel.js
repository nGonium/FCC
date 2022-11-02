const { model, Schema } = require('mongoose')

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: new Date().toDateString(),
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

// schema.set('toJSON', {
//   transform: (orig, ret) => {
//     delete ret.__v
//   }
// })

const Exercise = model('Exercise', schema)

module.exports = Exercise