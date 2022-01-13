import express from 'express';
import router from './middleware/router';
import database from './models';
import { serverPort as port } from './environment';

// create server
const app = express();

// middleware
app.use(express.json());
app.use(router);

try {
  database.connect();
  app.listen(port, () => console.log(`server: http://localhost:${port}`));
} catch (err) {
  console.error(err);
}