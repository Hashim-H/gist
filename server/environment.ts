require('dotenv').config()

// server
const serverPort: string | number = process.env.SERVER_PORT || 8000

// database
const databasePort: string | number = process.env.DB_PORT || 27017
const databaseName: string = process.env.DB_NAME || 'gist'

// api
const apiKey: string = process.env.API_KEY || 'not present'
const apiUserId: string | number = process.env.API_USER_ID || 'not present'

export { serverPort, databasePort, databaseName, apiKey, apiUserId }
