import { getOwnedGames } from '../steam'
import { Request, Response } from 'express'

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

async function getGameData(_: Request, res: Response) {
  try {
    const games = await getOwnedGames()
    games.sort((a: Game, b: Game) => {
      const textA = a.name.toUpperCase()
      const textB = b.name.toUpperCase()

      if (textA < textB) return -1
      else if (textA > textB) return 1
      else return 0
    })

    res.status(200)
    res.send(games)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

export { getGameData }
