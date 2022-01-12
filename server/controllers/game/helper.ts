import GameModel from '../../models/Game';
import Game from '../../typescript/interfaces/Game';
import steam from '../../api/steam';
import { FAILED_DATABASE_OPERATION } from '../../custom_messages/errors';

export async function getGamesFromDatabase() {
  try {
    const games = await GameModel.find();
    return games;
  } catch (err) {
    console.error(err);
    throw new Error(FAILED_DATABASE_OPERATION);
  }
}

export async function getGamesFromAPI() {
  // get data from API
  let apiData = await steam.getOwnedGames();

  apiData.forEach(async (game: Game) => {
    // extract required properties
    const { appid, name, img_icon_url, img_logo_url } = game;

    // construct update
    const filter = { appid: game.appid };
    const update = { appid, name, img_icon_url, img_logo_url };
    const options = { upsert: true }; // creates the document if it does not exist

    // update database
    try {
      await GameModel.findOneAndUpdate(filter, update, options);
    } catch (err) {
      console.error(err);
      throw new Error(FAILED_DATABASE_OPERATION);
    }
  });

  // get updated documents
  try {
    const games = await GameModel.find();
    return games;
  } catch (err) {
    console.error(err);
    throw new Error(FAILED_DATABASE_OPERATION);
  }
}