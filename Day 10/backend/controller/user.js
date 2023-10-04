import User from '../model/User.js';

export const signin = async (req, res) => {
  res.send('is signin');
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });
  user.save();

  res.send({ message: 'Register Success' });
};
