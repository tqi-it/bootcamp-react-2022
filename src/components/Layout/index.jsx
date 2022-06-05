import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from 'components/Typography';
import Toolbar from 'components/Toolbar';
import { Container, AppBar, Main } from './styles';

const Layout = ({ children }) => (
  <Container>
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bootcamp
        </Typography>
      </Toolbar>
    </AppBar>

    <Main>
      {children}
      <Outlet />
    </Main>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
