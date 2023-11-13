import axios from 'axios';

import { register_path, signin_path } from '../path';

export const serviceRegister = async (payload) => {
  try {
    const response = await axios.post(register_path, payload);
    // console.log(response);
    return response;
  } catch (err) {
    // console.log(err.message);
    return err;
  }
};

export const serviceSignin = async (payload) => {
  try {
    const response = await axios.post(signin_path, payload);

    return response;
  } catch (err) {
    // console.log(err.message);
    return err;
  }
};
