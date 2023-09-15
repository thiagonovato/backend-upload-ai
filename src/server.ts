import { fastify } from 'fastify'
import { getAllPromptRoutes } from './routes/get-all-prompts'

const app = fastify()
const port = 3333

app.register(getAllPromptRoutes)

app.listen({
  port
}).then(() => {
  console.log(`Server listening at ${port}.`)
})