import axios from 'axios';

import { get_blog } from '../path';

export const serviceGetBlog = async () => {
  try {
    const response = await axios.get(get_blog);
    // console.log(response); // response output sample --> { "data": { "blog": [ { "title": "test mock 1", "description": "test mock 1" } ] }, "status": 200, "statusText": "OK", "headers": { "content-length": "96", "content-type": "application/json; charset=utf-8" }, "config": { "transitional": { "silentJSONParsing": true, "forcedJSONParsing": true, "clarifyTimeoutError": false }, "adapter": "xhr", "transformRequest": [ null ], "transformResponse": [ null ], "timeout": 0, "xsrfCookieName": "XSRF-TOKEN", "xsrfHeaderName": "X-XSRF-TOKEN", "maxContentLength": -1, "maxBodyLength": -1, "env": {}, "headers": { "Accept": "application/json, text/plain, */*" }, "method": "get", "url": "http://localhost:3007/" }, "request": {} }
    return response;
  } catch (err) {
    // console.log(err.message);
    return err;
  }
};
