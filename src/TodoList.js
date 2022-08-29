import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoList(props) {
  const showTodoDialog = (value) => () => {
    console.log("open todo");
  };

  return (
    <List>
      {props.todos.map((todo) => {
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
              <ListItemText id={labelId} primary={todo.title} secondary={`${todo.id} comments`}/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
