const router = require('express').Router()
const User = require('../models/userModel')

router.post('/', (req, res) => {
  console.log(req.body)
})

module.exports = router