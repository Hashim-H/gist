import { Request, Response } from 'express';
import { getGamesFromDatabase, getGamesFromAPI } from './helper';

let timeout: Number;

async function getGameData(_: Request, res: Response) {
  let games;
  try {
    // check if API call has been made recently
    if (
      timeout &&
      timeout > Date.now()
    ) {
      games = await getGamesFromDatabase();
    } else {
      games = await getGamesFromAPI();

      // set 30 min timeout (to reduce unecessary calls)
      timeout = Date.now() + (1000 * 60 * 30);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500); // internal server error
  }

  res.status(200)
  res.send(games);
}

export default { getGameData };