import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BooksApi from 'services/books';
import DataGrid from 'components/DataGrid';
import Button from 'components/Button';
import Box from 'components/Box';
import Container from 'components/Container';
import Typography from 'components/Typography';
import IconButton from 'components/IconButton';
import { AddCircleIcon } from 'components/Icons';

const Books = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ page: 0, books: [], count: 0 });

  const fetch = useCallback((page = 0) => {
    BooksApi.page({}, page, 5)
      .then(data => setData(data))
      .catch(error => console.log('Error', error));
  }, []);

  const handleClickEdit = uuid => navigate(`/books/${uuid}`);

  const handleClickNew = () => navigate('/books/new');

  const columns = [
    { field: 'name', flex: 1 },
    { field: 'price', flex: 1 },
    { field: 'author', flex: 1 },
    {
      field: 'code',
      flex: 1,
      headerName: 'Ações',
      renderCell: params => (
        <Button size="small" onClick={() => handleClickEdit(params.value)}>
          Editar
        </Button>
      ),
    },
  ];

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          style={{ marginBottom: '16px', marginRight: '16px' }}
        >
          Livros
          <IconButton aria-label="delete" size="large" onClick={handleClickNew}>
            <AddCircleIcon />
          </IconButton>
        </Typography>

        <DataGrid
          rowKey="code"
          data={data?.books}
          page={data?.page}
          columns={columns}
          count={data?.count}
          handlePageChange={fetch}
        />
      </Box>
    </Container>
  );
};

export default Books;
