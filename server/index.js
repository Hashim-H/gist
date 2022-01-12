require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`server: http://localhost:${PORT}`));