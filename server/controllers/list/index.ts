import { Request, Response } from 'express';
import ListModel from '../../models/List';
import { apiUserId } from '../../environment';

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

async function postList(req: Request, res: Response) {
  try {
    // get data from request payload
    const { steamid, games } = req.body;
    console.log(steamid, games);
    if (steamid && games) {
      // create new list document
      const list = await ListModel.create({ steamid, games });

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
  postList
};