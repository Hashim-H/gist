import steam from '../api/steam';
import { Request, Response } from 'express';

async function getUserData(_: Request, res: Response) {
  try {
    // get player data
    const user = await steam.getPlayerSummaries();

    res.status(200)
    res.send(user);
  } catch (err) {
    console.error(err);
    res.sendStatus(500); // internal server error
  }
}

async function getGameData(_: Request, res: Response) {
  try {
    // get games as array
    const games = await steam.getOwnedGames();

    res.status(200)
    res.send(games);
  } catch (err) {
    console.error(err);
    res.sendStatus(500); // internal server error
  }
}

export default {
  getUserData,
  getGameData
};