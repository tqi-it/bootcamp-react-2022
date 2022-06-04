/**
 * Exemplo para utilizacao de rotas com lazy loading.
 */
import { lazy } from 'react';
import Layout from 'components/Layout';
const BooksPage = lazy(() => import('containers/books'));

const routes = () => [
  // {
  //  path: '/books/new',
  //  component: BookFormView,
  //  exact: true,
  // },
  // {
  //  path: '/books/edit/:id',
  //  component: BookFormView,
  //  exact: true,
  // },
  {
    path: '/books',
    component: BooksPage,
    layout: Layout,
    exact: true,
  },
];

export default routes;
