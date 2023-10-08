import jwt from 'jsonwebtoken';

// token availability checking:
const getToken = (req) => {
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
    console.log(verifyToken); // output: { exp: 1696675808, data: '6520b01fc382a2c8a5b7d928', iat: 1696672208 }
  } catch (err) {
    console.log(err); // err: invalid token
  }
};
