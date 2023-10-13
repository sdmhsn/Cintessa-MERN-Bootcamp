import Application from '../model/Application.js';

export const myApplication = async (req, res) => {
  const application = await Application.find({ user: req.user }).populate([
    'job',
    'user',
  ]); // get/find data with user (req.user) base

  /*
  note:
  await Application.find({ user: req.user }) != await Application.find()
  */

  const count = await Application.find({ user: req.user }).countDocuments();

  return res.send({ message: 'my application', data: application, count });
};

export const createApplication = async (req, res) => {
  const payload = req.body;
  // console.log(payload);
  // console.log(req.user);
  const application = new Application({
    user: req.user._id, // req.user._id is get from req.user = user in decodeToken() auth middleware
    additional_information: req.body.additional_information
      ? req.body.addition_information
      : '',
    ...payload,
  });
  await application.save();

  return res.send({ message: 'Application created', data: application });
};
