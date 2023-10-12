import express from 'express';

import { profile } from '../controller/user.js';
import { createJob } from '../controller/job.js';

const router = express.Router();

router.post('/profile', profile);
router.post('/create-job', createJob);

export default router;
