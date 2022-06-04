import axios from 'axios';
import { getJwt } from '../commons/utils/auth';

const params = {
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: getJwt(),
  },
};

const createApi = (baseURL = '', config = {}) => {
  const api = axios.create({
    baseURL,
    ...params,
    ...config,
  });

  api.interceptors.request.use(
    config => config,
    error => Promise.reject(error),
  );

  api.interceptors.response.use(
    response => (response.config.resHeaders ? response : response.data),
    error => {
      console.log('Erros podem ser tratatos aqui: ', error);
      return error;
    },
  );

  return api;
};

const REACT_APP_API_URL = 'http://localhost:3000/api';

export default createApi(REACT_APP_API_URL);
