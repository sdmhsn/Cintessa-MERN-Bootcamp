import express from 'express';

import { profile } from '../controller/user.js';
import { myApplication } from '../controller/application.js';

const router = express.Router();

router.post('/profile', profile);
router.post('/my-application', myApplication); // new router still need authentication because we define the private router under the decodeToken() in server.js

export default router;
