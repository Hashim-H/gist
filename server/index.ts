import dotenv from 'dotenv';
import express from 'express';
import database from './models';
import router from './custom_middleware/router';

// add environment variables
dotenv.config();

// create server
const app = express();

// middleware
app.use(router);

// start server
const port = process.env.SERVER_PORT || 3000;

try {
  database.connect();
  app.listen(port, () => console.log(`server: http://localhost:${port}`));
} catch (err) {
  console.error(err);
}