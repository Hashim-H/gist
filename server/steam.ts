import axios from 'axios'
import { apiKey, apiUserId } from './environment'

const BASE_URL: string = 'http://api.steampowered.com/'

interface Game {
  appid: number
  name: string
  playtime_forever: number
  img_icon_url: string
  img_logo_url: string
  has_community_visible_stats: boolean
  playtime_windows_forever: number
  playtime_mac_forever: number
  playtime_linux_forever: number
}

async function getOwnedGames() {
  const url: string = BASE_URL + 'IPlayerService/GetOwnedGames/v0001/'
  const params = {
    key: apiKey,
    steamid: apiUserId,
    include_appinfo: true,
  }

  const res = await axios.get(url, { params })
  const games: Game[] = res.data.response.games

  return games
}

async function getOwnedGamesById(appids: number[]) {
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

  const games: Game[] = res.data.response.games
  return games
}

export { getOwnedGames, getOwnedGamesById }
