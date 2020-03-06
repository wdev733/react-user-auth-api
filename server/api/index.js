import { Router } from 'express';

import account from './account';

const router = new Router();

router.use('/account', account);

export default router;
