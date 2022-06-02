import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeProvider } from '@mui/material/styles';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MainProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SCThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <GlobalStyle />
        {children}
      </>
    </SCThemeProvider>
  </ThemeProvider>
);

MainProvider.propTypes = {
  children: PropTypes.any,
};

export default MainProvider;
