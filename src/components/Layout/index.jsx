import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from 'components/Typography';
import Toolbar from 'components/Toolbar';
import IconButton from 'components/IconButton';
import { LogoutIcon } from 'components/Icons';
import { Container, AppBar, Main } from './styles';

const Layout = ({ children }) => (
  <Container>
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bootcamp
        </Typography>
        <IconButton href="/login" sx={{ my: 1, mx: 1.5 }} color="inherit">
          <LogoutIcon />
        </IconButton>
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
