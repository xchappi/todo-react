import React, { useState } from 'react';
import {
  ListItemText,
  ListItem,
  List,
  Button,
  Modal,
  makeStyles
} from '@material-ui/core';
import db from '../../firebase';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(props.todo.todo);

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set(
      {
        todo: input
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Open</h1>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update todo</Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem button>
          <ListItemText primary={props.todo.todo} secondary="Deadline " />
        </ListItem>
        <Button onClick={(e) => setOpen(true)}>Edit</Button>
        <br />
        <DeleteIcon
          className="todo__list--remove"
          onClick={(event) =>
            db.collection('todos').doc(props.todo.id).delete()
          }
        ></DeleteIcon>
      </List>
    </>
  );
}

export default Todo;
