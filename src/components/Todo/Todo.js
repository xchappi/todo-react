import React from 'react';
import { ListItemText, ListItem, List, Button } from '@material-ui/core';
import db from '../../firebase';

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem button>
        <ListItemText primary={props.todo.todo} secondary="Deadline " />
      </ListItem>
      <Button
        onClick={(event) => db.collection('todos').doc(props.todo.id).delete()}
      >
        🗑 REMOVE!!!
      </Button>
    </List>
  );
}

export default Todo;
