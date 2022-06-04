import api from './axios';

const path = '/authors';

const AuthorsApi = {
  page: (page, pageSize) => api.get(path, { params: { page, pageSize } }),
};

export default AuthorsApi;
