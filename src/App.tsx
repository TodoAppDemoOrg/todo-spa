import * as React from 'react'
import Container from '@mui/material/Container'
import TodoList from './TodoList'
import TodoDialog from './TodoDialog'
import { CircularProgress } from '@mui/material'
import TodoAppBar from './TodoAppBar'
import {useGetTodoList} from "./generated-openapi-client/api"

function App() {
  const query = useGetTodoList()

  return (
    <div>
    <TodoAppBar/>
    <Container>
      {query.isFetched && query.data ? <TodoList todos={query.data.data}/> : <CircularProgress/>}
      <TodoDialog/>
    </Container>
    </div>
  );
}

export default App;
