import User from '../model/User.js';
import { getToken } from '../middleware/auth.js';

import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

export const profile = async (req, res) => {
  let token = getToken(req);

  var verifyToken = jwt.verify(token, 'secret');
  const user = await User.findById(verifyToken.data).exec();

  return res.send({ message: 'Success', data: user, token: token });
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email }).exec();

  if (user) {
    const compare = bcrypt.compareSync(password, user.password);

    if (compare) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: user.id,
        },
        'secret'
      );

      return res.send({ message: 'Sign in Success', token: token });
    }

    return res.send({ message: 'Sign in Failed' });
  }

  return res.send('Email or Password not found!');
};

export const register = async (req, res) => {
  const payload = req.body;

  const user = new User(payload);
  await user.save();

  res.send({ message: 'Register Success', status: 200, success: true });
};
