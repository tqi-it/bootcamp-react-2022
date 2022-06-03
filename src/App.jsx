import Router from 'routes/Router';
import { useEffect, useState } from 'react';
import BooksApi from './services/books';
import MainProvider from './commons/providers/MainProvider';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    BooksApi.page({}, 0, 5)
      .then(data => {
        setData(data);
      })
      .catch(error => console.log('Erro', error));
  }, []);

  console.log('data->', data);

  return (
    <MainProvider>
      <Router />
    </MainProvider>
  );
};

export default App;
