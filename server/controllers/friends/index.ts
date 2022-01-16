import { Request, Response } from 'express';
import steam from '../../api/steam';

export async function getUserData(req: Request, res: Response) {
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

export default { getUserData };