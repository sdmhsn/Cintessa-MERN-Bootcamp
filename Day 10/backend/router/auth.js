import express from 'express';

const router = express.Router();

router.post('/signin', (req, res) => {
  res.send('is signin');
});

router.post('/register', (req, res) => {
  res.send('is register');
});

export default router;
