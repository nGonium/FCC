const router = require('express').Router()
const Exercise = require('../models/exerciseModel')
const User = require('../models/userModel')

router.post('/', async (req, res) => {
  console.log(req.body)
  User.findById(req.body[':_id'])
    .exec((err, result) => {
      if (err) {
        console.error(err)
        res.status(500).end()
      }
      if (!result) {
        res.status(404).end()
      }  

      delete req.body._id
      req.body.username = result.username

      const created = new Exercise(req.body)
      created.save((err, result) => {
        if (err) {
          console.error(err)
          res.status(500).end()
        }
        res.json(result)
      })
    })
})

router.get('/', (req, res) => {
  Exercise.find({})
    .exec((err, result) => {
      if (err) {
        console.error(err)
        res.status(500).end()
      }
      res.json(result)
    })
})

module.exports = router