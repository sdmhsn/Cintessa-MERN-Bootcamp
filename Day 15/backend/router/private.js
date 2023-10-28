import express from 'express';

import { profile } from '../controller/user.js';
import { createJob } from '../controller/job.js';
import { job } from '../controller/job.js';
import { updateJob } from '../controller/job.js';
import { deleteJob } from '../controller/job.js';
import { getJobById } from '../controller/job.js';
import { createApplication } from '../controller/application.js';
import { myApplication } from '../controller/application.js';

const router = express.Router();

router.post('/profile', profile);
router.post('/create-job', createJob);
router.get('/job', job);
router.put('/job/:id', updateJob);
router.delete('/job/:id', deleteJob);
router.get('/job/:id', getJobById);
router.post('/create-application', createApplication);
router.get('/my-application', myApplication);

export default router;
