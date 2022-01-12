import dotenv from 'dotenv';
import express from 'express';

import router from './custom_middleware/router';

// add environment variables
dotenv.config();

// create server
const app = express();

// middleware
app.use(router);

// start server
const PORT = process.env.SERVER_PORT || 3000;

try {
  app.listen(PORT, () => console.log(`server: http://localhost:${PORT}`));
} catch (err) {
  console.error(err);
}