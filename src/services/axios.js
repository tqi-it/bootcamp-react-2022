import axios from 'axios';
import { getJwt } from '../commons/utils/auth';
import { onResponseError } from './errors';

const params = {
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: null,
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
      // console.log('Erros desconhecidos podem ser tratatos aqui: ', error);
      const { status } = error?.response;
      onResponseError(status);

      return Promise.reject(error.response);
    },
  );

  return api;
};

const REACT_APP_API_URL = '/api';

export default createApi(REACT_APP_API_URL);
