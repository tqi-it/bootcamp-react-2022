/* eslint-disable import/no-anonymous-default-export */
import responseData from '../data';
import { rest } from 'msw';

export default [
  rest.get(`/api/books`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(responseData.books.page)),
  ),

  rest.get(`/api/books/:id`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(responseData.books.book)),
  ),

  rest.post(`/api/books`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json(responseData.books.post)),
  ),

  rest.put(`/api/books`, (req, res, ctx) => res(ctx.status(204))),

  rest.patch(`/api/books`, (req, res, ctx) => res(ctx.status(204))),
];
