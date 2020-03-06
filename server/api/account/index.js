import { Router } from 'express';
import { password } from '../../services/passport';
import { login } from './controller';

const router = new Router();

/**
 * @api {post} /api/account/login Account Login
 * @apiName Authenticate
 * @apiGroup account
 * @apiParam {email, password}
 */
router.post('/login', password(), login);

export default router;
