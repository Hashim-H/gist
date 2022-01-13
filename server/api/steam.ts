import axios from 'axios';
import { apiKey, apiUserId } from '../environment';

interface AxiosParams {
  [index: string]: any
};

async function getFactory(customPath: String, customParams?: AxiosParams) {
  // constants
  const BASE_URL = 'http://api.steampowered.com/';
  const BASE_PARAMS = { key: apiKey };

  // construct request
  const url = BASE_URL + customPath;
  const params = Object.assign(BASE_PARAMS, customParams);

  // send request
  const res = await axios.get(url, { params });
  return res;
}

async function getPlayerSummaries() {
  const customParams = { steamids: apiUserId };

  // fetch data
  const res = await getFactory('ISteamUser/GetPlayerSummaries/v0002/', customParams);

  // extract necessary data
  const [ player ] = res.data.response.players;
  return player;
}

async function getOwnedGames() {
  const customParams = {
    steamid: apiUserId,
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
};