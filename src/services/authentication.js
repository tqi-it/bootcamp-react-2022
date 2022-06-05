/* eslint-disable camelcase */
import api from './axios';

const path = '/login';

const AuthenticationApi = {
  login: (username, password) => {
    const data = {
      username,
      password,
      grant_type: 'password',
    };
    api.post(path, data, {
      resHeaders: true,
    });
  },

  logout: () => {
    api.post('/auth/logout');
  },
};

export default AuthenticationApi;
