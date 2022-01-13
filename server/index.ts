import express from 'express';
import router from './middleware/router';
import database from './bootstrap/database';
import { serverPort as port } from './bootstrap/environment';

// create server
const app = express();

// middleware
app.use(router);

try {
  database.connect();
  app.listen(port, () => console.log(`server: http://localhost:${port}`));
} catch (err) {
  console.error(err);
}