import dotenv from 'dotenv';

dotenv.config();

// server
export const serverPort = process.env.SERVER_PORT || 3000;

// database
export const databasePort = process.env.DB_PORT || 27017;
export const databaseName = process.env.DB_NAME || 'gist';

// api
export const apiKey = process.env.API_KEY;
export const apiUserId = process.env.API_USER_ID;