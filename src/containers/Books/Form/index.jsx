import { memo, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import BooksApi from 'services/books';
import { isStatusBadRequest, isStatusNotFound } from 'services/errors';
import { toast } from 'commons/utils/toast';
import { isEmpty } from 'commons/utils/helpers';
import Box from 'components/Box';
import Grid from 'components/Grid';
import Button from 'components/Button';
import TextField from 'components/TextField';
import Typography from 'components/Typography';
import Container from 'components/Container';

const FormBooks = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [fields, setFields] = useState({
    name: '',
    author: '',
    price: '',
  });

  const isUpdate = Boolean(id);

  const checkHelperText = (value, message) => (isEmpty(value) ? message : '');

  const checkFormIsEmpty = () =>
    isEmpty(fields.author) || isEmpty(fields.name) || isEmpty(fields.price);

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    await setFields(init => ({
      ...init,
      name: formData.get('name'),
      author: formData.get('author'),
      price: formData.get('price'),
    }));

    if (checkFormIsEmpty()) {
      toast.error('Preencha os campos do formulário!');
      return;
    }

    try {
      await BooksApi.save(fields);

      toast.success('Registro salvo com sucesso!');
    } catch (error) {
      if (isStatusBadRequest(error.status)) {
        toast.error('Não foi possível salvar o livro!');
      }
      console.error('Error:', error);
    }
  };

  const handleChange = event =>
    setFields(init => ({ ...init, [event.target.name]: event.target.value }));

  const fetch = id =>
    BooksApi.get(id)
      .then(setFields)
      .catch(error => {
        if (isStatusNotFound(error.status)) {
          toast.error('Não foi encontrado nenhum Registro na base de dados!');
        }
        console.error('Error:', error);
      });

  useEffect(() => {
    if (id) {
      fetch(id);
    }
  }, [id]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {isUpdate ? 'Editar' : 'Cadastrar'} Livros
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={event => handleSubmit(event)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Nome do Livro"
                name="name"
                value={fields?.name}
                onChange={handleChange}
                helperText={checkHelperText(
                  fields?.name,
                  'Obrigatório informar o Nome do Livro',
                )}
                error={isEmpty(fields?.name)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="author"
                label="Autor"
                name="author"
                onChange={handleChange}
                value={fields?.author}
                helperText={checkHelperText(
                  fields?.author,
                  'Obrigatório informar o Nome do Autor',
                )}
                error={isEmpty(fields?.author)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="price"
                label="Preço"
                name="price"
                onChange={handleChange}
                value={fields?.price}
                helperText={checkHelperText(
                  fields?.price,
                  'Obrigatório informar o Preço',
                )}
                error={isEmpty(fields?.price)}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Salvar
          </Button>

          <Button
            fullWidth
            onClick={() => navigate('../books', { replace: true })}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default memo(FormBooks);
