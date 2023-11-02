import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import authRouter from './router/auth.js'; // using ES6 should include .js extension
import { decodeToken } from './middleware/auth.js';
import privateRouter from './router/private.js';

const app = express();
const port = 8000;

// mongodb connection
mongoose.connect(
  'mongodb://root:123456@127.0.0.1:27017/jobhunt?authSource=admin'
);
const db = mongoose.connection;
/* mongoose connection error & success checking */
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connection success'));

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/', authRouter);
app.use((req, res, next) => {
  decodeToken(req, res, next); // decodeToken middleware should under the authRouter
});
app.use('/', privateRouter);

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
