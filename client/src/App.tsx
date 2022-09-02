import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Container from '@mui/material/Container';
import TodoList from './TodoList';
import TodoDialog from './TodoDialog';
import { CircularProgress } from '@mui/material';
import TodoAppBar from './TodoAppBar';
import {TodoListItem} from "api/TodoListItem";

function App() {
  async function getTodoList(): Promise<TodoListItem[]> {
    const response = await axios("/api/todo-list/");
    return response.data;
  }

  const query = useQuery(['todo-list'], getTodoList);

  return (
    <div>
    <TodoAppBar/>
    <Container>
      {query.isFetched && query.data ? <TodoList todos={query.data}/> : <CircularProgress/>}
      <TodoDialog/>
    </Container>
    </div>
  );
}

export default App;
