import { mockAuthorization } from 'mocks/utils';
import { rest } from 'msw';

export default [
  rest.post(`/api/auth/login`, (req, res, ctx) => 
  res(
    ctx.status(204), 
    ctx.json(mockAuthorization(req)))),

  rest.post(`/api/auth/logout`, (req, res, ctx) => res(ctx.status(204))),
];
