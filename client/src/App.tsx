import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import Container from '@mui/material/Container';
import TodoList from './TodoList';
import TodoDialog from './TodoDialog';
import { CircularProgress } from '@mui/material';
import TodoAppBar from './TodoAppBar';
import {fetchTodoList} from "./App.backend";

function App() {
  const query = useQuery(['todo-list'], fetchTodoList);

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
