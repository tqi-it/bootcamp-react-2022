/* eslint-disable camelcase */
import { setJwt } from 'commons/utils/auth';
import api from './axios';

const AuthenticationApi = {
  login: ({username, password}, navigate) => {
    const data = {
      username,
      password,
      grant_type: 'password',
    };
    try{
      api.post('/auth/login', data, {
        resHeaders: true,
      }).then(response => {
        if(response?.data?.token) {
          setJwt(response.data.token);
          navigate?.('/books');
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
