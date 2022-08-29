import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Container from '@mui/material/Container';
import TodoList from './TodoList';
import TodoDialog from './TodoDialog';
import { CircularProgress } from '@mui/material';
import TodoAppBar from './TodoAppBar';

function App() {
  async function getTodos() {
    let response = await axios("https://jsonplaceholder.typicode.com/todos/");
    return response.data;
  }

  const query = useQuery(['todos'], getTodos);

  return (
    <div>
    <TodoAppBar/>
    <Container>
      {query.isFetched ? <TodoList todos={query.data}/> : <CircularProgress/>}
      <TodoDialog/>
    </Container>
    </div>
  );
}

export default App;
