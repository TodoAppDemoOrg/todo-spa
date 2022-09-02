import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';

export default function TodoDialog() {

    const handleClose = () => {
    };
  
    return (
      <Dialog onClose={handleClose} open={false}>
        <DialogTitle>Set backup account</DialogTitle>
        <List sx={{ pt: 0 }}>
                
            <ListItem button key={"just key"}>
                <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={"kek"} />
            </ListItem>
  
          <ListItem autoFocus button>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItem>
        </List>
      </Dialog>
    );
  }
  