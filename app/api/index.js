import axios from 'axios';
import { BASE_URL, login, password } from './constants';

const get = (name, id = '') =>
  axios
    .get(`${BASE_URL}/${name}/${id}?format=json`, {
      auth: {
        login,
        password,
      },
    })
    .then(resp => resp.json());

const post = (name, data, id = '') =>
  axios
    .post(
      `${BASE_URL}/${name}/${id}?format=json`,
      { data },
      {
        auth: {
          login,
          password,
        },
      },
    )
    .then(resp => resp.json());

export default {
  get,
  post,
};
