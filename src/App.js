import React, { useState } from 'react';
import { Button, Input, InputLabel, FormControl } from '@material-ui/core';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([
    'Take dogs for a walk',
    'Buy ice cream',
    'Be the very best'
  ]);
  const [input, setInput] = useState('');
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <form onSubmit={addTodo}>
        <FormControl>
          <InputLabel>Write a ToDo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
