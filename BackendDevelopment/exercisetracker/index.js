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

const userRouter = require('./controllers/userController')
const exerciseRouter = require('./controllers/exerciseController')
app.use('/api/users', userRouter)
app.use('/api/users/:_id/exercises', exerciseRouter)



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
