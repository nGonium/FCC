const router = require('express').Router()
const User = require('../models/userModel')

router.post('/', (req, res, next) => {
  const createdUser = new User(req.body)
  createdUser.save()
    .then(result => res.json(result))
    .catch(err => next(err))
})

router.get('/', (req, res, next) => {
  User.find({})
    .then(result => res.json(result))
    .catch(err => next(err))
})

module.exports = router