const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  }
})

userSchema.set('toJSON', {
  transform: (orig, ret) => {
    delete ret.__v
  }
})

const User = model('User', userSchema)

module.exports = User