const express = require('express')
const cors = require('cors')
const router = require('./router')
const database = require('./models')
const port = require('./environment').serverPort

// create server
const app = express()

// middleware
app.use(cors())
app.use(express.tson())
app.use(router)

try {
  database.connect()
  app.listen(port, () => console.log(`server: http://localhost:${port}`))
} catch (err) {
  console.error(err)
}
