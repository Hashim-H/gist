require('dotenv').config();

// server
const serverPort = process.env.SERVER_PORT || 3000;

// database
const databasePort = process.env.DB_PORT || 27017;
const databaseName = process.env.DB_NAME || 'gist';

// api
const apiKey = process.env.API_KEY;
const apiUserId = process.env.API_USER_ID;

module.exports = {
  serverPort,
  databasePort,
  databaseName,
  apiKey,
  apiUserId
};