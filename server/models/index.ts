const mongoose = require('mongoose');
const { databasePort, databaseName } = require('../environment');

async function connect() {
  await mongoose.connect(`mongodb://localhost:${databasePort}/${databaseName}`);
}

module.exports = { connect };