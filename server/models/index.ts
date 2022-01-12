import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DATABASE_CONNECTION_ERROR } from '../custom_messages/errors';

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
    throw new Error(DATABASE_CONNECTION_ERROR);
  }
}

export default { connect };