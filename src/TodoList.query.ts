import {TodoListItem} from "./TodoList.model";
import {gql, request} from "graphql-request";

const endpoint = "http://localhost:4000/"

export async function fetchTodoList(): Promise<TodoListItem[]> {
    const todoListItems = await request(
        endpoint,
        gql`
            query {
                todos {
                    id
                    title
                    commentCount
                }
            }
        `
    );
    return todoListItems.todos;
}
