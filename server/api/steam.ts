import dotenv from 'dotenv';
import axios from 'axios';

// add envvironment variables
dotenv.config();
const { API_KEY, API_USER_ID } = process.env;

// if environment variables do not exist, throw error
if (!API_KEY || !API_USER_ID) throw new Error('Missing environment variable');


async function getFactory(customPath, customParams?) {
  // constants
  const BASE_URL = 'http://api.steampowered.com/';
  const BASE_PARAMS = { key: API_KEY };

  // construct request
  const url = BASE_URL + customPath;
  const params = Object.assign(BASE_PARAMS, customParams);

  // send request
  const res = await axios.get(url, { params });
  return res;
}

async function getPlayerSummaries() {
  const customParams = { steamids: API_USER_ID };

  // fetch data
  const res = await getFactory('ISteamUser/GetPlayerSummaries/v0002/', customParams);

  // extract necessary data
  const [ player ] = res.data.response.players;
  return player;
}

async function getOwnedGames() {
  const customParams = {
    steamid: API_USER_ID,
    include_appinfo: true
  };

  // fetch data
  const res = await getFactory('IPlayerService/GetOwnedGames/v0001/', customParams);

  // extract necessary data
  const { games } = res.data.response;
  return games;
}

export default {
  getOwnedGames,
  getPlayerSummaries
}