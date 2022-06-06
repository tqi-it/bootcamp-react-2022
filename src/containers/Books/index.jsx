import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BooksApi from 'services/books';
import { isStatusNotFound } from 'services/errors';
import { toast } from 'commons/utils/toast';
import DataGrid from 'components/DataGrid';
import Button from 'components/Button';
import Box from 'components/Box';
import Container from 'components/Container';
import Typography from 'components/Typography';
import IconButton from 'components/IconButton';
import {
  AddCircleIcon,
  PeopleIcon,
  EditIcon,
  DeleteIcon,
} from 'components/Icons';

const Books = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ page: 0, books: [], count: 0 });

  const fetch = useCallback(page => {
    BooksApi.page(page)
      .then(data => setData(data))
      .catch(error => {
        if (isStatusNotFound(error.status)) {
          toast.error('Não foi encontrado nenhum Registro na base de dados!');
        }

        console.log('Error', error);
      });
  }, []);

  const handleClickEdit = uuid => navigate(`/books/${uuid}`);

  const handleClickNew = () => navigate('/books/new');

  const handleClickDel = uuid => console.log('handleClickDel', uuid);

  const columns = [
    { field: 'name', flex: 1, headerName: 'Name do Livro' },
    { field: 'price', flex: 1, headerName: 'Preço' },
    { field: 'author', flex: 1, headerName: 'Autor' },
    {
      field: 'code',
      flex: 1,
      headerName: 'Ações',
      renderCell: params => (
        <>
          <IconButton
            size="small"
            onClick={() => handleClickEdit(params.value)}
            title="Editar Livro"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => handleClickDel(params.value)}
            title="Excluir Livro"
          >
            <DeleteIcon />
          </IconButton>
        </>
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
          <IconButton
            aria-label="Novo Livro"
            size="large"
            onClick={handleClickNew}
            title="Novo Livro"
          >
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

        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => navigate('/authors')}
        >
          <PeopleIcon style={{ marginRight: '16px' }} />
          Autores
        </Button>
      </Box>
    </Container>
  );
};

export default Books;
