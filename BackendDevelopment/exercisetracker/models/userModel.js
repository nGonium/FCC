const { model, Schema } = require('mongoose')

const userSchema = {
  name: String
}

const User = model('User', userSchema)

module.exports = User