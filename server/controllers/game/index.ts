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

    // sort the games alphabetically
    games.sort((a, b) => {
      // normalise names
      const textA = a.name.toUpperCase();
      const textB = b.name.toUpperCase();

      if (textA < textB) return -1;
      else if (textA > textB) return 1;
      else return 0;
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }

  res.status(200)
  res.send(games);
}

export default { getGameData };