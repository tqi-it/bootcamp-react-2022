import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from 'containers/login';
import RequireAuth from './RequireAuth';
import routes from './routes';

const appRoutes = routes();

const Loading = () => <p>Loading...</p>;

const Router = () => (
  <BrowserRouter>
    <Routes>
      {appRoutes.map(
        ({
          path,
          component: Component,
          layout: Layout = 'div',
          exact,
          ...routeProps
        }) => (
          <Route
            path={path}
            key={path}
            exact
            element={
              <RequireAuth redirectTo="/login">
                <Layout>
                  <Suspense fallback={<Loading full />}>
                    <Component {...routeProps} />
                  </Suspense>
                </Layout>
              </RequireAuth>
            }
          />
        ),
      )}

      <Route exact path="/login" element={<LoginPage />} />
      {/* 

        TODO: exemplo de rotas fixas privadas

        <RequireAuth redirectTo="/login">
          <Route exact path="/books/update/:id" />
        </RequireAuth>

        TODO: exemplo de rotas fixas publicas
        
        <Route exact path="/books/update/:id" />
        <Route exact path="/books/new" />
       */}
    </Routes>
  </BrowserRouter>
);

export default Router;
