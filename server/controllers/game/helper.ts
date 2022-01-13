import GameModel from '../../models/Game';
import steam from '../../api/steam';

export async function getGamesFromDatabase() {
  const games = await GameModel.find();
  return games;
}

export async function getGamesFromAPI() {
  interface Game {
    appid: Number,
    name: String,
    img_icon_url: String,
    img_logo_url: String
  };

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
    await GameModel.findOneAndUpdate(filter, update, options);
  });

  // get updated documents
  const games = await GameModel.find();
  return games;
}