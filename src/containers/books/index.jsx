import { useEffect, useState } from 'react';
import BooksApi from 'services/books';
import DataGrid from 'components/DataGrid';

const Books = () => {
  const [data, setData] = useState({ page: 0, books: [], count: 0 });

  useEffect(() => {
    BooksApi.page({}, 0, 5)
      .then(data => setData(data))
      .catch(error => console.log('Erro', error));
  }, []);

  const columns = [
    { field: 'code', headerName: 'Código', flex: 1 },
    { field: 'name', flex: 1 },
    { field: 'price', flex: 1 },
    { field: 'author', flex: 1 },
  ];

  return (
    <DataGrid
      rowKey="code"
      data={data?.books}
      page={data?.page}
      columns={columns}
      count={data?.count}
    />
  );
};

export default Books;
