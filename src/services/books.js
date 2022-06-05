import api from './axios';

const path = '/books';

const BooksApi = {
  page: (filters = {}, page, pageSize) =>
    api.get(path, { params: { ...filters, page, pageSize } }),

  get: id => api.get(`${path}/${id}`),

  save: data => {
    console.log('save', data);
    return data?.code
      ? api.put(`${path}/${data?.code}`, data)
      : api.post(path, data);
  },
};

export default BooksApi;
