import api from './axios';

const path = '/books';

const BooksApi = {
  page: (filters = {}, page, pageSize) =>
    api.get(path, { params: { ...filters, page, pageSize } }),
};

export default BooksApi;
