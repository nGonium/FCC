const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const { urlencoded } = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
app.use(urlencoded({ extended: false }))

app.use((req, res, next) => {
  console.log(req.method, req.url)
  console.log('BODY: ', req.body)
  console.log('PARAMS: ', req.params)
  console.log('---------------')
  next()
})

const userRouter = require('./controllers/userController')
const exerciseRouter = require('./controllers/exerciseController')
const logRouter = require('./controllers/logController')

app.use('/api/users/', userRouter)
app.use('/api/users/', exerciseRouter)
app.use('/api/users/', logRouter)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json(err)
})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
