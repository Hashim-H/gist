import ListModel from '../../models/List';
import { Request, Response } from 'express';
import Game from '../../interfaces/Game';
import { apiUserId } from '../../environment';
import steam from '../../api/steam';

async function getLists(_: Request, res: Response) {
  try {
    const lists = await ListModel.find({ steamid: apiUserId });
    res.status(200);
    res.send(lists);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function getListById(req: Request, res: Response) {
  try {
    // get list from database
    const [list] = await ListModel.find({ _id: req.params.id }).lean();

    // extract appids
    const appids = list.games.map((game: Game) => game.appid);

    // get owned games from api by appid
    const games = await steam.getOwnedGamesById(appids);

    // assign additional properties
    list.games.forEach((game: Game, index: number) => {
      const apiData = games[index];

      game.name = apiData.name;
      game.img_icon_url = apiData.img_icon_url;
      game.img_logo_url = apiData.img_logo_url;
    });

    res.status(200);
    res.send(list);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function postList(req: Request, res: Response) {
  try {
    // get data from request payload
    const { name, steamid, games } = req.body;
    if (name && steamid && games) {
      // create new list document
      const list = await ListModel.create({ name, steamid, games });

      res.status(201);
      res.send(list);
    } else {
      res.sendStatus(400) // bad request
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export default {
  getLists,
  getListById,
  postList
};