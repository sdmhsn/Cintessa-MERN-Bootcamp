import express from 'express';

import { profile } from '../controller/user.js';

const router = express.Router();

router.post('/profile', profile);

export default router;
