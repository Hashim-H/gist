import mongoose from 'mongoose';
import { databasePort as port, databaseName as name } from '../environment';

async function connect() {
  await mongoose.connect(`mongodb://localhost:${port}/${name}`);
}

export default { connect };