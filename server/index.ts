import Express from 'express'
import router from './router'
import cors from 'cors'
import dbConnect from './models'
import { serverPort } from './environment'

// create server
const app = Express()

// middleware
app.use(cors())
app.use(Express.json())
app.use(router)

try {
  dbConnect()
  app.listen(serverPort, () =>
    console.log(`server: http://localhost:${serverPort}`)
  )
} catch (err) {
  console.error(err)
}
