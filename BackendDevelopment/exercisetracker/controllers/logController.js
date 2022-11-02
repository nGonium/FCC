const router = require('express').Router()
const Exercise = require('../models/exerciseModel')
const User = require('../models/userModel')

router.get('/:id/logs', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      const filter = { username: user.username }
      if (req.query.from) filter.date = { $gt: new Date(req.query.from).toDateString() }
      if (req.query.to) filter.date = { $lt: new Date(req.query.to).toDateString() }
      const options = {}
      if (req.query.limit) options.limit = parseInt(req.query.limit)

      Exercise.find(filter, {}, options)
        .then(exercises => {
          const resObj = {
            username: user.username,
            count: exercises.length,
            _id: user._id,
            log: exercises.map(el => {
              return {
                description: el.description,
                duration: el.duration,
                date: el.date.toDateString(),
              }
            })
          }
          res.json(resObj)
        })
    })
})

module.exports = router