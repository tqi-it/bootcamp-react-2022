import { addStorageListener, setJwt, logout } from 'commons/utils/auth';
import React, { useEffect, useState } from 'react';
import AuthenticationApi from 'services/authentication';
import { Provider } from './AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = ({ username, password }, callback) =>
    AuthenticationApi.login(username, password)
      .then(token => {
        setUser(token);
        setJwt(token);
        setIsAuthenticated(true);
        callback();
      })
      .catch(() => console.log('Erro login...'));

  const signOut = callback =>
    AuthenticationApi.logout().then(() => {
      setUser(null);
      logout();
      callback();
    });

  useEffect(() => {
    addStorageListener();
  }, []);

  return (
    <Provider value={{ user, signIn, signOut, isAuthenticated }}>
      {children}
    </Provider>
  );
};

export default AuthProvider;
