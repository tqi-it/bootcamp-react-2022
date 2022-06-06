import { toast } from 'commons/utils/toast';

const STATUS = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  FATAL: 500,
  UNAVAILABLE: 503,
  TIMEOUT: 504,
};

const isStatusBadRequest = status => status === STATUS.BAD_REQUEST;

const isStatusUnauthorized = status => status === STATUS.UNAUTHORIZED;

const isStatusForbidden = status => status === STATUS.FORBIDDEN;

const isStatusNotFound = status => status === STATUS.NOT_FOUND;

const isStatusFatal = status => status === STATUS.FATAL;

const isStatusUnavailable = status => status === STATUS.UNAVAILABLE;

const isStatusTimeout = status => status === STATUS.TIMEOUT;

const onResponseError = status => {
  if (isStatusFatal(status)) {
    toast.error('');
    return;
  }

  if (isStatusUnavailable(status)) {
    toast.error('');
    return;
  }

  if (isStatusTimeout(status)) {
    toast.error('');
  }
};

export {
  onResponseError,
  isStatusFatal,
  isStatusUnavailable,
  isStatusTimeout,
  isStatusBadRequest,
  isStatusUnauthorized,
  isStatusNotFound,
  isStatusForbidden,
  STATUS,
};
