import express, {Request, Response} from 'express'
import {fetchCommentStatistics, fetchTodos} from './internal-api';
import {TodoListItem} from "api/TodoListItem";

const app = express()
const port = 8000

app.get('/api/todo-list/', async (req: Request, res: Response<TodoListItem[]>) => {
  const todos = await fetchTodos()
  const commentStats = await fetchCommentStatistics(todos.map(todo => todo.id))
  const commentsPerTodo = new Map(commentStats.map(stat => [stat.topic, stat.comment_count]))
  res.send(todos.map(todo => {
    return {id: todo.id, title: todo.title, commentCount: commentsPerTodo.get(todo.id) || 0}
  }))
})

app.use(express.static('../client/build'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
