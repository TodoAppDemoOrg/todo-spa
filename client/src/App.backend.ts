import {TodoListItem} from "api/TodoListItem";
import axios from "axios";

export async function fetchTodoList(): Promise<TodoListItem[]> {
    const response = await axios("/api/todo-list/");
    return response.data;
}
