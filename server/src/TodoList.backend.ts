import express, {Request, Response} from 'express'
import {TodoListItem} from "client/TodoList.model";
import {fetchCommentStatistics, fetchTodos} from "./internal-api";

const router = express.Router()
export default router

router.get('/api/todo-list/', async (req: Request, res: Response<TodoListItem[]>) => {
  const todos = await fetchTodos()
  const commentStats = await fetchCommentStatistics(todos.map(todo => todo.id))
  const commentsPerTodo = new Map(commentStats.map(stat => [stat.topic, stat.comment_count]))
  res.json(todos.map(todo => {
    return {id: todo.id, title: todo.title, commentCount: commentsPerTodo.get(todo.id) || 0}
  }))
})
