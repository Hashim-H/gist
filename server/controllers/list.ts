import ListModel from '../models/List'
import { apiUserId } from '../environment'
import { getOwnedGamesById } from '../steam'
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

interface LinstInterface {
  _id?: string
  name: string
  steamid: number
  games: Game[]
  ordered: boolean
}

async function getLists(_: Request, res: Response) {
  try {
    const lists = await ListModel.find({ steamid: apiUserId })

    res.status(200)
    res.send(lists)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

async function getListById(req: Request, res: Response) {
  try {
    // get list from database
    const list: LinstInterface = await ListModel.find({
      _id: req.params.id,
    }).lean()

    // extract appids
    const appids: number[] = list.games.map((game) => game.appid)

    // get owned games from api by appid
    const apiGames = await getOwnedGamesById(appids)

    // assign additional properties
    list.games.forEach((game) => {
      const apiData = apiGames.find((apiGame) => {
        return apiGame.appid === game.appid
      })

      if (apiData) {
        game.name = apiData.name
        game.img_logo_url = apiData.img_logo_url
      } else throw new Error('api not found')
    })

    res.status(200)
    res.send(list)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

async function putList(req: Request, res: Response) {
  // check data
  const body = req.body
  if (
    !body.hasOwnProperty('name') ||
    !body.hasOwnProperty('games') ||
    !body.hasOwnProperty('ordered') ||
    !body.name ||
    !body.games.length
  ) {
    res.sendStatus(400)
    return
  }

  try {
    // construct update
    const { _id, name, games, ordered } = req.body
    const update = {
      steamid: apiUserId,
      name,
      games,
      ordered,
    }

    // update database
    if (_id) {
      const filter = { _id }
      await ListModel.findOneAndUpdate(filter, update)
      res.sendStatus(200)
    } else {
      ListModel.create(update)
      res.sendStatus(201)
    }
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

async function deleteList(req: Request, res: Response) {
  try {
    const filter = { _id: req.params.id }
    await ListModel.deleteOne(filter)
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

export { getLists, getListById, putList, deleteList }
