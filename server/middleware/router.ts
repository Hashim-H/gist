import { Router } from 'express';
import game from '../controllers/game';
import user from '../controllers/user';
import list from '../controllers/list';

const router = Router();

router.get('/', (_, res) => res.send('hi'));
router.get('/steam/user', user.getUserData);
router.get('/steam/games', game.getGameData);
router.get('/lists', list.getListData);

export default router;