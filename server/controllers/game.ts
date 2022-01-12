import steam from '../api/steam';

async function getUserData(_, res) {
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

async function getGameData(_, res) {
  try {
    // get games as array
    const games = await steam.getOwnedGames();

    console.log(games);
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
}