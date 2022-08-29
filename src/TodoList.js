import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import ListSubheader from '@mui/material/ListSubheader';

export default function TodoList() {
  const [checked, setChecked] = React.useState([0, 2]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const showTodoDialog = (value) => () => {
    console.log("open todo");
  };

  return (
    <List>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end">
                <DeleteIcon/>
              </IconButton>
            }
            disablePadding
          >
            <Checkbox />
            <ListItemButton role={undefined} onClick={showTodoDialog(value)}>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} secondary={"13 comments"}/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
