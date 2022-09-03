import express from 'express'
import TodoListRouter from './TodoList.backend'

const app = express()
const port = 8000

app.use(TodoListRouter)

app.use(express.static('../build'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
