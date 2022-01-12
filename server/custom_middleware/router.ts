import { Router } from 'express';
import game from '../controllers/game';
import user from '../controllers/user';

const router = Router();

router.get('/', (_, res) => res.send('hi'));
router.get('/steam/user', user.getUserData);
router.get('/steam/games', game.getGameData);

/*
  get player information
  get player games
  get player lists
*/

export default router;