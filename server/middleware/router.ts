import { Router } from 'express';
import game from '../controllers/game';
import user from '../controllers/user';
import list from '../controllers/list';

const router = Router();

router.get('/', (_, res) => res.send('hi'));
router.get('/steam/user', user.getUserData);
router.get('/steam/games', game.getGameData);

// lists
router.get('/lists', list.getLists);
router.post('/lists', list.postList);

export default router;