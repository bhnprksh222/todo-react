import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

import './App.css';

function App() {
    const [todos, setTodos] = useState(['Take dogs for a walk', 'Take trash out', 'study js']);
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
                {/* <input value={input} onChange={event => setInput(event.target.value)} /> */}
                <FormControl>
                    <InputLabel >Write a Todo</InputLabel>
                    <Input value={input} onChange={event => setInput(event.target.value)}/>
                </FormControl>
                
                <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
                    Add Todo
                </Button>
                {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
            </form>


            <ul>
                {todos.map(todo => (
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;