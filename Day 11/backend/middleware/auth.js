import jwt from 'jsonwebtoken';

import User from '../model/User.js';

// token availability checking:
export const getToken = (req) => {
  let token = req.headers.authorization
    ? req.headers.authorization.replace('Bearer ', '')
    : null;

  return token && token.length ? token : null;
};

// decoding getToken()
export const decodeToken = async (req, res, next) => {
  try {
    let token = getToken(req);

    if (!token) {
      return res.send({ message: 'Authentication failed' }); // stop token decoding if getToken() return null (no auth)
    }

    // token available
    var verifyToken = jwt.verify(token, 'secret'); // the secret key ('secret') in jwt.verify(), should be correspond with secret key in  jwt.sign()
    // console.log(verifyToken); // output: { exp: 1696675808, data: '6520b01fc382a2c8a5b7d928', iat: 1696672208 }

    const user = await User.findById(verifyToken.data).exec();
    /* 
      user output:
      {
        _id: new ObjectId("6520b01fc382a2c8a5b7d928"),
        name: 'Saddam Husein',
        email: 'saddam@gmail.com',
        password: '$2b$10$QU2sQRoZfwm.dOWzmDdDO.dtN5YeezLr0yrHHHe7nAz3B6YTamUqi',
        __v: 0
      }
    */

    if (user) {
      req.user = user; // to set req.user with user value to controller inside privateRouter() middleware (the custom middleware in server.js which have able by jwt / decodeToken() (line 26 - 27))
      return next(); // return next(): continue to return res.send({ message: 'Profile' }) profile controller (user.js). this also to stop loading in postman
    }

    return res.send({ message: 'Authentication failed' });
  } catch (err) {
    // console.log(err); // err: invalid token
    return res.send({ message: err.message });
  }
};
