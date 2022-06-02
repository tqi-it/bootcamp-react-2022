const PROF_ITEMS = "PROF_ITEMS";

const getJwt = () => `Bearer ${sessionStorage.getItem(PROF_ITEMS)}`;

const setJwt = (token) => sessionStorage.setItem(PROF_ITEMS, token);

export { getJwt, setJwt };
