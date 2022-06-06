import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AuthenticationApi from 'services/authentication';
import { addStorageListener, setJwt, logout } from 'commons/utils/auth';
import { Provider } from './AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const signIn = ({ username, password }, callback) =>
    AuthenticationApi.login(username, password)
      .then(() => {
        const token = { isAuthenticated: true, user: 'Usuário Teste' };
        setUser(token);
        setJwt(token);
        setIsAuthenticated(true);
        callback?.();
      })
      .catch(() => console.log('Erro login...'));

  const signOut = async callback => {
    try {
      await logout(callback);
      setIsAuthenticated(false);
    } catch (e) {
      setUser(null);
      console.error('ERROR: Não possível efetuar o logout!');
    }
  };

  useEffect(() => {
    addStorageListener();
  }, []);

  return (
    <Provider value={{ user, signIn, signOut, isAuthenticated }}>
      {children}
    </Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
