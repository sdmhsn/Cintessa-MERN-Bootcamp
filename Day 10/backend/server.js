import express from 'express';
import mongoose from 'mongoose';

import authRouter from './router/auth.js'; // using ES6 should include .js extension

const app = express();
const port = 3000;

// mongodb connection
mongoose.connect(
  'mongodb://root:123456@127.0.0.1:27017/jobhunt?authSource=admin'
);
const db = mongoose.connection;
/* mongoose connection error & success checking */
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connection success'));

// middleware
app.use('/', authRouter);

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});