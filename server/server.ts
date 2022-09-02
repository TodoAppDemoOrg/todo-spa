import express, {Request, Response} from 'express'
import {fetchCommentStatistics, fetchTodos} from './internal_api';
import {TodoListItem} from "../api/TodoListItem";

const app = express()
const port = 8000

app.get('/api/todo-list/', async (req: Request, res: Response) => {
  const todos = await fetchTodos()
  const commentStats = await fetchCommentStatistics(todos.map(todo => todo.id))
  const commentsPerTodo = new Map(commentStats.map(stat => [stat.topic, stat.comment_count]))
  const result: TodoListItem[] = todos.map(todo => {
    return {id: todo.id, title: todo.title, commentCount: commentsPerTodo.get(todo.id) || 0}
  })
  res.send(result)
})

app.use(express.static('../client/build'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
