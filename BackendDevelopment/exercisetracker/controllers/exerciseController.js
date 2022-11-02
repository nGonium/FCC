const router = require('express').Router()
const Exercise = require('../models/exerciseModel')
const User = require('../models/userModel')

router.post('/:id/exercises', async (req, res, next) => {
  console.log('id', req.params.id)
  User.findById(req.params.id)
    .then(user => {
      if (!user) throw Error('Invalid Id')
      const exercise = new Exercise({
        description: req.body.description,
        duration: parseInt(req.body.duration),
        username: user.username,
        // TODO this simply returns Invalid Date, not proper validation
        date: req.body.date ? new Date(req.body.date).toDateString() : undefined,
      })
      exercise.save()
        .then(exercise => {
          const resObj = { ...exercise.toObject(), ...user.toObject() }
          delete resObj.__v 
          res.json(resObj)
        })
        .catch(err => next(err))
    })
    .catch(err => next(err))
})

router.get('/:id/exercises', (req, res, next) => {
  Exercise.find({})
    .then(result => res.json(result))
    .catch(err => next(err))
})

module.exports = router