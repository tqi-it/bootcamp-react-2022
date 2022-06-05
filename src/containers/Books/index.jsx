import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BooksApi from 'services/books';
import DataGrid from 'components/DataGrid';
import Button from 'components/Button';

const Books = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ page: 0, books: [], count: 0 });

  const fetch = useCallback((page = 0) => {
    BooksApi.page({}, page, 5)
      .then(data => setData(data))
      .catch(error => console.log('Error', error));
  }, []);

  const handleEdit = uuid => navigate(`/books/${uuid}`);

  const columns = [
    { field: 'name', flex: 1 },
    { field: 'price', flex: 1 },
    { field: 'author', flex: 1 },
    {
      field: 'code',
      flex: 1,
      headerName: 'Ações',
      renderCell: params => (
        <Button size="small" onClick={() => handleEdit(params.value)}>
          Editar
        </Button>
      ),
    },
  ];

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <DataGrid
      rowKey="code"
      data={data?.books}
      page={data?.page}
      columns={columns}
      count={data?.count}
      handlePageChange={fetch}
    />
  );
};

export default Books;
