const router = require('express').Router()
const Exercise = require('../models/exerciseModel')
const User = require('../models/userModel')

router.get('/:id/logs', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      Exercise.find({ username: user.username })
        .then(exercises => {
          const resObj = {
            username: user.username,
            count: exercises.length,
            _id: user._id,
            log: exercises.map(el => {
              return {
              description: el.description,
              duration: el.duration,
              date: el.date,
              }
            })
          }
          res.json(resObj)
        })
    })
})

module.exports = router