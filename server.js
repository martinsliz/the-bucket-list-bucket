const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const routes = require('./routes')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('Hello!')
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})