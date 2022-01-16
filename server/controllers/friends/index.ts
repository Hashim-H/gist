// libaries
import { Request, Response } from 'express';

// api
import steam from '../../api/steam';

// database
import ListModel from '../../models/List';

export async function getUserData(_: Request, res: Response) {
  try {
    const friendsList = await steam.getFriendsList();
    const friendData = await steam.getPlayerSummariesArray(friendsList);
    res.status(200);
    res.send(friendData);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getFriendListsByUserId(req: Request, res: Response) {
  try {
    const lists = await ListModel.find({ steamid: req.params.id });
    res.status(200);
    res.send(lists);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export default {
  getUserData,
  getFriendListsByUserId
};
