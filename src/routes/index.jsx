import { BrowserRouter, Switch, Route } from 'react-router-dom';

const DefaultRoute = () => <Route component={<p>Not Found!</p>} />;

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/books" />
      <Route exact path="/books/update/:id" />
      <Route exact path="/books/new" />

      <DefaultRoute />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
