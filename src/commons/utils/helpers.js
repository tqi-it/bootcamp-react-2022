const emptyToNull = value =>
  typeof value === 'undefined' || value === '' ? null : value;

const isEmpty = value =>
  value === null ||
  value === undefined ||
  (typeof value === 'string' && value.trim().length === 0) ||
  (Array.isArray(value) && value.length === 0) ||
  (typeof value === 'object' && Object.keys(value).length === 0);

const isEmptyPage = data =>
  isEmpty(data) || (!Array.isArray(data) && isEmpty(data?.books));

export { emptyToNull, isEmpty, isEmptyPage };
