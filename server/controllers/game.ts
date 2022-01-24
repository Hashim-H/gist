const steam = require('../steam');

async function getGameData(_, res) {
  try {
    const games = await steam.getOwnedGames();
    games.sort((a, b) => {
      const textA = a.name.toUpperCase();
      const textB = b.name.toUpperCase();

      if (textA < textB) return -1;
      else if (textA > textB) return 1;
      else return 0;
    });

    res.status(200)
    res.send(games);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

module.exports = { getGameData };