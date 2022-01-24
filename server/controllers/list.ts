const ListModel = require('../models/List');
const { apiUserId } = require('../environment');
const steam = require('../steam');

async function getLists(_, res) {
  try {
    const lists = await ListModel.find({ steamid: apiUserId });

    res.status(200);
    res.send(lists);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function getListById(req, res) {
  try {
    // get list from database
    const [list] = await ListModel.find({ _id: req.params.id }).lean();

    // extract appids
    const appids = list.games.map(game => game.appid);

    // get owned games from api by appid
    const apiGames = await steam.getOwnedGamesById(appids);

    // assign additional properties
    list.games.forEach(game => {
      const apiData = apiGames.find(apiGame => {
        return apiGame.appid === game.appid;
      });

      game.name = apiData.name;
      game.img_logo_url = apiData.img_logo_url;
    });

    res.status(200);
    res.send(list);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function putList(req, res) {

  // check data
  const body = req.body;
  if (
    !body.hasOwnProperty('name') ||
    !body.hasOwnProperty('games') ||
    !body.hasOwnProperty('ordered') ||
    !body.name ||
    !body.games.length
  ) {
    res.sendStatus(400);
    return;
  }

  try {
    // construct update
    const { _id, name, games, ordered } = req.body;
    const update = {
      steamid: apiUserId,
      name,
      games,
      ordered
    };

    // update database
    if (_id) {
      const filter = { _id };
      await ListModel.findOneAndUpdate(filter, update);
      res.sendStatus(200);
    } else {
      ListModel.create(update);
      res.sendStatus(201);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function deleteList(req, res) {
  try {
    const filter = { _id: req.params.id };
    await ListModel.deleteOne(filter);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

module.exports = {
  getLists,
  getListById,
  putList,
  deleteList
};