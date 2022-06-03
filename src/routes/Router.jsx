import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from 'containers/login';
import routes from './routes';

const appRoutes = routes();

const Router = () => (
  <BrowserRouter>
    <>
      <Routes>
        {appRoutes.map(({ path, component: Component, exact }) => (
          <Route key={path} path={path} element={<Component />} exact={exact} />
        ))}

        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/books" />
        <Route exact path="/books/update/:id" />
        <Route exact path="/books/new" />
      </Routes>
    </>
  </BrowserRouter>
);

export default Router;
