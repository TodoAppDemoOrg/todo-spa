import {Controller, Get, Route} from "tsoa";
import {fetchCommentStatistics, fetchTodos} from "./internal-api";

// TODO replace with interface from client
interface TodoListItem {
    id: string;
    title: string;
    commentCount: number;
}

// TODO move to client
@Route("api/todo-list")
export class TodoListController extends Controller {
    @Get()
    public async getTodoList(): Promise<TodoListItem[]> {
        const todos = await fetchTodos()
        const commentStats = await fetchCommentStatistics(todos.map(todo => todo.id))
        const commentsPerTodo = new Map(commentStats.map(stat => [stat.topic, stat.comment_count]))
        return todos.map(todo => {
            return {id: todo.id, title: todo.title, commentCount: commentsPerTodo.get(todo.id) || 0}
        })
    }
}
