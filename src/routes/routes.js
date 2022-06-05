/**
 * Exemplo para utilizacao de rotas com lazy loading.
 */
import { lazy } from 'react';
import Layout from 'components/Layout';
const BooksPage = lazy(() => import('containers/Books'));
const BookForm = lazy(() => import('containers/Books/Form'));

const routes = () => [
  // {
  //  path: '/books/new',
  //  component: BookFormView,
  //  exact: true,
  // },
  {
    path: '/books/:id',
    component: BookForm,
    layout: Layout,
    exact: true,
  },
  {
    path: '/books',
    component: BooksPage,
    layout: Layout,
    exact: true,
  },
];

export default routes;
