import dotenv from 'dotenv';
import UserModel from '../../models/User';
import steam from '../../api/steam';
import { MISSING_ENVIRONMENT_VARIABLE, FAILED_DATABASE_OPERATION } from '../../custom_messages/errors';

// add envvironment variables
dotenv.config();
const { API_USER_ID } = process.env;

// if environment variables do not exist, throw error
if (!API_USER_ID) throw new Error(MISSING_ENVIRONMENT_VARIABLE);

export async function getUserFromDatabase() {
  try {
    const user = await UserModel.find({ steamid: API_USER_ID });
    return user;
  } catch (err) {
    console.error(err);
    throw new Error(FAILED_DATABASE_OPERATION);
  }
}

export async function getUserFromAPI() {
  // get data from API
  const apiData = await steam.getPlayerSummaries();

  // extract required properties
  const { steamid, personaname, avatar, avatarmedium, avatarfull } = apiData;

  // construct update
  const filter = { steamid: API_USER_ID };
  const update = { steamid, personaname, avatar, avatarmedium, avatarfull };
  const options = { upsert: true, new: true }; // creates the document if it does not exist and returns the updated document

  // update database and get updated document
  try {
    const user = await UserModel.findOneAndUpdate(filter, update, options);
    return user;
  } catch (err) {
    console.error(err);
    throw new Error(FAILED_DATABASE_OPERATION);
  }
}