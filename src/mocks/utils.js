const mockLazyList = (page, rowsPerPage, array, arrayName = 'items') => {
  const pageNumber = +page;
  const start = pageNumber * +rowsPerPage;
  const end = start + +rowsPerPage;
  const totalItemCount = array?.length || 0;
  const items = array?.slice(start, end);

  return {
    count: totalItemCount,
    page: pageNumber,
    size: +rowsPerPage,
    [arrayName]: items,
  };
};

const mockPagination = (req, listAll, arrayName) => {
  const page = req.url?.searchParams?.get('page') || 0;
  const perPage = req.url?.searchParams?.get('size') || 5;

  return mockLazyList(page, perPage, listAll, arrayName);
};

const mockAuthorization = ({username, password}) => {
  debugger;
  const user = 'bootcamp';
  const pass = 'vempratqi';
  if(username === user && password === pass) {
    //TO DO - Mock jwt
    return {res: 'oksdt9773324'};
  }
}

export { mockLazyList, mockPagination, mockAuthorization };
