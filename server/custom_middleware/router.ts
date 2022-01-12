import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => res.send('hi'));

export default router;