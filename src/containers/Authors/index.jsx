import { memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthorsApi from 'services/authors';
import { isStatusNotFound } from 'services/errors';
import { toast } from 'commons/utils/toast';
import DataGrid from 'components/DataGrid';
import Button from 'components/Button';
import Box from 'components/Box';
import Container from 'components/Container';
import Typography from 'components/Typography';
import { ArrowBackIcon } from 'components/Icons';

const Authors = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ page: 0, authors: [], count: 0 });

  const fetch = useCallback(page => {
    AuthorsApi.page(page)
      .then(data => setData(data))
      .catch(error => {
        if (isStatusNotFound(error.status)) {
          toast.error('Não foi encontrado nenhum Registro na base de dados!');
        }

        console.log('Error', error);
      });
  }, []);

  const columns = [{ field: 'name', flex: 1, headerName: 'Nome do Autor' }];

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
          Autores
        </Typography>

        <DataGrid
          rowKey="code"
          data={data?.authors}
          page={data?.page}
          columns={columns}
          count={data?.count}
          handlePageChange={fetch}
        />

        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => navigate('../books', { replace: true })}
        >
          <ArrowBackIcon style={{ marginRight: '16px' }} /> Voltar
        </Button>
      </Box>
    </Container>
  );
};

export default memo(Authors);
