/* eslint-disable import/no-anonymous-default-export */
import { rest } from "msw";
import responseData from '../data';

export default [
  rest.post(
    `/auth/login`,
    (req, res, ctx) => res(ctx.status(204), ctx.json(responseData.auth))
  ),

  rest.post(
    `${process.env.REACT_APP_API_AUTH_URL}/auth/logout`,
    (req, res, ctx) => res(ctx.status(204))
  ),
];
