const axios = require('axios')
const { apiKey: string, apiUserId: number } = require('./environment')

const BASE_URL = 'http://api.steampowered.com/'

async function getOwnedGames() {
  const url = BASE_URL + 'IPlayerService/GetOwnedGames/v0001/'
  const params = {
    key: apiKey,
    steamid: apiUserId,
    include_appinfo: true,
  }

  const res = await axios.get(url, { params })
  const { games } = res.data.response

  return games
}

async function getOwnedGamesById(appids) {
  const url = BASE_URL + 'IPlayerService/GetOwnedGames/v0001/'

  const params = {
    key: apiKey,
    input_json: {
      steamid: apiUserId,
      include_appinfo: true,
      appids_filter: appids,
    },
  }

  const res = await axios.get(url, { params })

  const { games } = res.data.response
  return games
}

module.exports = {
  getOwnedGames,
  getOwnedGamesById,
}
