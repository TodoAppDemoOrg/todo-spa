import express, { Request, Response } from 'express'
import { fetchTodos, fetchCommentStatistics } from './internal_api';
const app = express()
const port = 8000


// TODO move to a common place once client is migrated to Typescript
interface TodoListItem {
  id: string;
  title: string;
  commentCount: number;
}

async function fetchTodoList(): Promise<TodoListItem[]> {
  const todos = await fetchTodos()
  const commentStats = await fetchCommentStatistics(todos.map(todo => todo.id))

  const commentsPerTodo = new Map()
  for (var stat of commentStats) {
    commentsPerTodo.set(stat.topic, stat.comment_count)
  }

  const result: TodoListItem[] = todos.map(todo => {
    return {id: todo.id, title: todo.title, commentCount: commentsPerTodo.get(todo.id)}
  })
  return result
}

app.get('/api/todo-list/', async (req: Request, res: Response) => {
  res.send(await fetchTodoList())
})

app.use(express.static('../client/build'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
