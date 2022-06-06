import api from './axios';

const path = '/authors';

const AuthorsApi = {
  page: (page = 0, size = 5) => api.get(`${path}?page=${page}&size=${size}`),
};

export default AuthorsApi;
