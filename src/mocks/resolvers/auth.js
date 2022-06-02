/* eslint-disable import/no-anonymous-default-export */
import { rest } from "msw";

export default [
  rest.post(
    `${process.env.REACT_APP_API_AUTH_URL}/auth/login`,
    (req, res, ctx) => res(ctx.status(204))
  ),

  rest.post(
    `${process.env.REACT_APP_API_AUTH_URL}/auth/logout`,
    (req, res, ctx) => res(ctx.status(204))
  ),
];
