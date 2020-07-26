import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

import './App.css';
import Todo from './Todo';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, input]);
        setInput('');
    }

    return ( 
        <div className = "App" >
            <h1>Todo List</h1>
            <form>
                <FormControl>
                    <InputLabel >Write a Todo✅</InputLabel>
                    <Input value={input} onChange={event => setInput(event.target.value)}/>
                </FormControl>
                
                <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
                    Add Todo
                </Button>
            </form>


            <ul>
                {todos.map(todo => (
                    // <li>{todo}</li>
                    <Todo text={todo} />
                ))}
            </ul>
        </div>
    );
}

export default App;