import User from '../model/User.js';

export const signin = async (req, res) => {
  res.send('is signin');
};

export const register = async (req, res) => {
  const payload = req.body;

  const user = new User(payload);
  await user.save();

  res.send({ message: 'Register Success' });
};
