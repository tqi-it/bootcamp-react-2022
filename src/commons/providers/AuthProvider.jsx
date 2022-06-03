import { addStorageListener, setJwt, logout } from 'commons/utils/auth';
import { useEffect, useState } from 'react';
import AuthenticationApi from 'services/authentication';
import { Provider } from './AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = ({ username, password }, callback) =>
    AuthenticationApi.login(username, password)
      .then(data => {
        const { token, newUser } = data; // TODO verificar o retorno com o back

        setUser(newUser);
        setJwt(token /* setar o token */);
        setIsAuthenticated(true);
        callback();
      })
      .catch(() => console.log('Erro login...'));

  const signOut = callback =>
    AuthenticationApi.logout().then(() => {
      setUser(null);

      logout();
      /* remover o token */
      callback();
    });

  useEffect(() => {
    addStorageListener();
  }, []);

  const value = { user, signIn, signOut, isAuthenticated };

  return <Provider value={value}>{children}</Provider>;
};

export default AuthProvider;
