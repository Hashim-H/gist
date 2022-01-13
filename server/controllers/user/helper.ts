import UserModel from '../../models/User';
import { apiUserId } from '../../environment';
import steam from '../../api/steam';

export async function getUserFromDatabase() {
  const [ user ] = await UserModel.find({ steamid: apiUserId });
  return user;
}

export async function getUserFromAPI() {
  // get data from API
  const apiData = await steam.getPlayerSummaries();

  // extract required properties
  const { steamid, personaname, avatar, avatarmedium, avatarfull } = apiData;

  // construct update
  const filter = { steamid: apiUserId };
  const update = { steamid, personaname, avatar, avatarmedium, avatarfull };
  const options = { upsert: true, new: true }; // creates the document if it does not exist and returns the updated document

  // update database and get updated document
  const user = await UserModel.findOneAndUpdate(filter, update, options);
  return user;
}