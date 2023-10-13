import Application from '../model/Application.js';

export const myApplication = async (req, res, next) => {
  return res.send({ message: 'application' });
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
