/**
 * Exemplo para utilizacao de rotas com lazy loading.
 */
import { lazy } from 'react';
import Layout from 'components/Layout';
const BooksPage = lazy(() => import('containers/Books'));
const BookForm = lazy(() => import('containers/Books/Form'));
const AuthorsPage = lazy(() => import('containers/Authors'));

const routes = () => [
  {
    path: '/books',
    component: BooksPage,
    layout: Layout,
    exact: true,
  },
  {
    path: '/books/new',
    component: BookForm,
    layout: Layout,
    exact: true,
  },
  {
    path: '/books/:id',
    component: BookForm,
    layout: Layout,
    exact: true,
  },

  {
    path: '/authors',
    component: AuthorsPage,
    layout: Layout,
    exact: true,
  },
];

export default routes;
