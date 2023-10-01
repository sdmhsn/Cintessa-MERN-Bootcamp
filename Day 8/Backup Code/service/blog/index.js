import axios from 'axios';

import { get_blog } from '../path';

export const serviceGetBlog = async () => {
  return await axios
    .get(get_blog)
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
};
