import { toCurrencyFormat } from 'commons/utils/currency';

const serverToGrid = data => {
  data.books = data?.books?.map(item => ({
    ...item,
    price: toCurrencyFormat(item?.price),
  }));

  return data;
};

export default serverToGrid;
