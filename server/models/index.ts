import dotenv from 'dotenv';
import mongoose from 'mongoose';

async function connect() {
  // add environment variables
  dotenv.config();
  const port = process.env.DB_PORT || 27017;
  const name = process.env.DB_NAME || 'gist';

  // connect database
  try {
    await mongoose.connect(`mongodb://localhost:${port}/${name}`);
  } catch (err) {
    console.error(err);
    throw new Error('Failed to connect to database');
  }
}

export default { connect };