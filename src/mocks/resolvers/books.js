/* eslint-disable import/no-anonymous-default-export */
import responseData from "../data";
import { rest } from "msw";

export default [
  rest.get(`${process.env.REACT_APP_API_URL}/books/:id`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(responseData.books.book))
  ),

  rest.get(`${process.env.REACT_APP_API_URL}/books`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(responseData.books.page))
  ),

  rest.post(`${process.env.REACT_APP_API_URL}/books`, (req, res, ctx) =>
    res(ctx.status(204))
  ),

  rest.put(`${process.env.REACT_APP_API_URL}/books`, (req, res, ctx) =>
    res(ctx.status(204))
  ),

  rest.patch(`${process.env.REACT_APP_API_URL}/books`, (req, res, ctx) =>
    res(ctx.status(204))
  ),
];
