import { fastify } from 'fastify'

const app = fastify()
const port = 3333

app.get('/', async (request, reply) => {
  return { hello: 'world' }
})

app.listen({
  port
}).then(() => {
  console.log(`Server listening at ${port}.`)
})