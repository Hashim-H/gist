import dotenv from 'dotenv';
import express from 'express';

// add environment variables
dotenv.config();

// create server
const app = express();

// start server
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`server: http://localhost:${PORT}`));