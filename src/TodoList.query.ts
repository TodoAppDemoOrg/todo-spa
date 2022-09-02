import axios from "axios";
import {TodoListItem} from "./TodoList.model";

export async function fetchTodoList(): Promise<TodoListItem[]> {
    const response = await axios("/api/todo-list/");
    return response.data;
}
