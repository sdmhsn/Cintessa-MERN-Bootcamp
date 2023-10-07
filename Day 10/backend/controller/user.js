import User from '../model/User.js';

import bcrypt from 'bcrypt';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email }).exec();
  console.log(user);
  /*
    sample of user output:
    {
      _id: new ObjectId("652029b32986538624f641f8"),
      name: 'Tati Husein',
      email: 'tati@gmail.com',
      password: '$2b$10$uS.M7gu/BgEIp4JthNwRBuFtxF0HcUxVuQgGukB/DifzfUIgaay56',
      __v: 0
    }
  */

  if (user) {
    const compare = bcrypt.compareSync(password, user.password);
    // console.log(compare); // output: true / false

    if (compare) {
      return res.send({ message: 'Sign in Success' });
    }
    return res.send({ message: 'Sign in Failed' });
  }
  res.send('Email or Password not found!');
};

export const register = async (req, res) => {
  const payload = req.body;

  const user = new User(payload);
  await user.save();

  res.send({ message: 'Register Success' });
};
