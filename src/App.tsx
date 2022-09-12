import * as React from 'react';
import { useQuery } from '@apollo/client';
import Container from '@mui/material/Container';
import TodoList from './TodoList';
import TodoDialog from './TodoDialog';
import { CircularProgress } from '@mui/material';
import TodoAppBar from './TodoAppBar';
import {GET_TODOS} from "./TodoList.query";

function App() {
  const { loading, error, data } = useQuery(GET_TODOS);

  return (
    <div>
    <TodoAppBar/>
    <Container>
      {!loading && data ? <TodoList todos={data.todos}/> : <CircularProgress/>}
      <TodoDialog/>
    </Container>
    </div>
  );
}

export default App;
