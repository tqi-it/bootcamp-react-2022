import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import BooksApi from 'services/books';
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

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // BooksApi.save(id, formData);
    console.log({
      name: formData.get('name'),
      author: formData.get('author'),
      price: formData.get('price'),
    });
  };

  const handleChange = event => {
    setFields(init => ({ ...init, [event.target.name]: event.target.value }));
  };

  const fetch = id =>
    BooksApi.get(id)
      .then(setFields)
      .catch(error => console.error('Error:', error));

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
                helperText="Obrigatório informar o nome do Livro."
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
                helperText="Obrigatório informar o nome do Autor."
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
                helperText="Obrigatório informar o Preço."
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

export default FormBooks;
