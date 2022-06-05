/* eslint-disable camelcase */
import { setJwt } from 'commons/utils/auth';
import api from './axios';

const path = '/login';

const AuthenticationApi = {
  login: (username, password) => {
    const data = {
      username,
      password,
      grant_type: 'password',
    };
    try{
      api.post(path, data, {
        resHeaders: true,
      }).then(response => {
        debugger;
        if(response?.token) {
          setJwt(response.token);
        }
      }

      );
    } catch (e) {
      console.log('error');
    }
  },

  logout: () => {
    api.post('/auth/logout');
  },
};

export default AuthenticationApi;
