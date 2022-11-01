const router = require('express').Router()
const User = require('../models/userModel')

router.post('/', async (req, res) => {
  const createdUser = new User(req.body)
  createdUser.save((err, result) => {
    if (err) {
      console.error(err)
      res.status(500).end()
    }
    res.json(result)
  })
})

router.get('/', (req, res) => {
  User.find({})
    .exec((err, result) => {
      if (err) {
        console.error(err)
        res.status(500).end()
      }
      res.json(result)
    })
})

module.exports = router