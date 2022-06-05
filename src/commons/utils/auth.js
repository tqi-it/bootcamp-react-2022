import AuthenticationApi from 'services/authentication';

const PROF_ITEMS = 'PROF_ITEMS';

const getJwt = () => sessionStorage.getItem(PROF_ITEMS);

const setJwt = token => sessionStorage.setItem(PROF_ITEMS, token);

const clearJwt = () => sessionStorage.removeItem(PROF_ITEMS);

const systemLogout = () => AuthenticationApi.logout();
const systemLogin = ({ username, password }, navigate) => AuthenticationApi.login({ username, password }, navigate);

const logout = async navigate => {
  try {
    await systemLogout();
    clearJwt();
    navigate?.('/login');
  } catch (err) {
    console.log('ERROR: ', err);
  }
};

const login = async ({ username, password }, navigate) => {
  try {
    await systemLogin({ username, password }, navigate);
  } catch (err) {
    console.log('ERROR: ', err);
  }
};

const storageListener = e => {
  const isTokenCleanupEvent = e.key === PROF_ITEMS && e.oldValue && !e.newValue;
  if (isTokenCleanupEvent) logout();
};

const addStorageListener = () => {
  window.addEventListener('storage', storageListener);

  return function cleanup() {
    window.removeEventListener('storage', storageListener);
  };
};

export { getJwt, setJwt, systemLogout, logout, addStorageListener, login, clearJwt };
