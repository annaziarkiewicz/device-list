import { rest } from 'msw'
import json from '@/mocks/response.json'

export const handlers = [
  rest.get('/devices', (req, res, ctx) => {
    return res(ctx.json(json))
  })
]
