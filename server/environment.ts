require('dotenv').config()

// server
const serverPort: number = process.env.SERVER_PORT || 3000

// database
const databasePort: number = process.env.DB_PORT || 27017
const databaseName: string = process.env.DB_NAME || 'gist'

// api
const apiKey: string = process.env.API_KEY
const apiUserId: number = process.env.API_USER_ID

module.exports = {
  serverPort,
  databasePort,
  databaseName,
  apiKey,
  apiUserId,
}
