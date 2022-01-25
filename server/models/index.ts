import { connect } from 'mongoose'
import { databasePort, databaseName } from '../environment'

async function dbConnect() {
  await connect(`mongodb://localhost:${databasePort}/${databaseName}`)
}

export default dbConnect
