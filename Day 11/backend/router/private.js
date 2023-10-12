import express from 'express';

import { profile } from '../controller/user.js';
import { createJob } from '../controller/job.js';
import { job } from '../controller/job.js';
import { updateJob } from '../controller/job.js';

const router = express.Router();

router.post('/profile', profile);
router.post('/create-job', createJob);
router.get('/job', job);
router.put('/job/:id', updateJob);

export default router;
