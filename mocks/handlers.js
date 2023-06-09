import { rest } from 'msw';

export const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, username: 'anson' }]));
  }),
  rest.post('/api/auth', (req, res, ctx) => {
    return res(ctx.json({}));
  }),
];
