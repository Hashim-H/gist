import { Router } from 'express';
import game from '../controllers/game';
import user from '../controllers/user';
import list from '../controllers/list';
import friends from '../controllers/friends';

const router = Router();


// lists
router.get('/lists', list.getLists);
router.get('/lists/:id', list.getListById);




router.get('/steam/user', user.getUserData);
router.get('/games', game.getGameData);


router.put('/lists', list.putList);
router.delete('/lists/:id', list.deleteList);

// friends
router.get('/friends', friends.getUserData);
router.get('/friends/:id/lists', friends.getFriendListsByUserId);
router.get('/friends/:id/steamdata', friends.getPlayerSummariesById)

export default router;