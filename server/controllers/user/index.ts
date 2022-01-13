import { Request, Response } from 'express';
import { getUserFromDatabase, getUserFromAPI } from './helper';

let timeout: Number;

async function getUserData(_: Request, res: Response) {
  let user;
  try {
    // check if API call has been made recently
    if (
      timeout &&
      timeout > Date.now()
    ) {
      user = await getUserFromDatabase();
    } else {
      user = await getUserFromAPI();

      // set 30 min timeout (to reduce unecessary calls)
      timeout = Date.now() + (1000 * 60 * 30);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }

  res.status(200)
  res.send(user);
}

export default { getUserData };