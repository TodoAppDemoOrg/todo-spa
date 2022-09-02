import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {TodoListItem} from "./TodoList.model";


export interface TodoListProps {
  todos: TodoListItem[]
}

export default function TodoList({todos}: TodoListProps) {
  const showTodoDialog = (todo: TodoListItem) => () => {
    console.log(`open todo ${todo}`);
  };

  return (
    <List>
      {todos.map((todo: TodoListItem) => {
        const labelId = `checkbox-list-label-${todo.title}`;

        return (
          <ListItem
            key={todo.title}
            secondaryAction={
              <IconButton edge="end">
                <DeleteIcon/>
              </IconButton>
            }
            disablePadding
          >
            <Checkbox />
            <ListItemButton role={undefined} onClick={showTodoDialog(todo)}>
              <ListItemText id={labelId} primary={todo.title} secondary={`${todo.commentCount || 'no'} comments`}/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
