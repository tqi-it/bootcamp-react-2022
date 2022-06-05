import api from './axios';

const path = '/authors';

const AuthorsApi = {
  page: (filters = {}, page, pageSize) =>
    api.get(path, { params: { ...filters, page, pageSize } }),
};

export default AuthorsApi;
