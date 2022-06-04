/* eslint-disable camelcase */
import api from './axios';

const AuthenticationApi = {
  login: (username, password) => {
    const data = {
      username,
      password,
      grant_type: 'password',
    };
    api.post('/auth/login', data, {
      resHeaders: true,
    }).then(response => response ? response : {});
  },

  logout: () => {
    api.post('/auth/logout');
  },
};

export default AuthenticationApi;
