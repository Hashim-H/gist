import ListModel from '../../models/List';
import { Request, Response } from 'express';
import Game from '../../interfaces/Game';
import { apiUserId } from '../../environment';
import steam from '../../api/steam';

async function getLists(_: Request, res: Response) {
  try {
    // get lists from database
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
    const apiGames = await steam.getOwnedGamesById(appids);

    // assign additional properties
    list.games.forEach((game: Game) => {
      const apiData = apiGames.find((apiGame: Game) => {
        return apiGame.appid === game.appid;
      });

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

async function putList(req: Request, res: Response) {

  // check data
  const body = req.body;
  if (
    !body.hasOwnProperty('name') ||
    !body.hasOwnProperty('games') ||
    !body.hasOwnProperty('ordered') ||
    !body.name ||
    !body.games.length
  ) {
    res.sendStatus(400);
    return;
  }

  try {
    // construct update
    const { _id, name, games, ordered } = req.body;
    const update = {
      steamid: apiUserId,
      name,
      games,
      ordered
    };

    // update database
    if (_id) {
      const filter = { _id };
      await ListModel.findOneAndUpdate(filter, update);
      res.sendStatus(200);
    } else {
      ListModel.create(update);
      res.sendStatus(201);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export default {
  getLists,
  getListById,
  putList
};