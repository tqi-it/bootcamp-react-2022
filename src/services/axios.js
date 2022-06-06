import axios from 'axios';
import { onResponseError } from './errors';

const params = {
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Basic xxxxx',
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
      const { status } = error?.response;
      onResponseError(status);

      return Promise.reject(error.response);
    },
  );

  return api;
};

const REACT_APP_API_URL = '/api';

export default createApi(REACT_APP_API_URL);
