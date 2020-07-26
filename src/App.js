import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import firebase from 'firebase';

import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
        })
    }, []);

    const addTodo = (event) => {
        event.preventDefault();
        
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }

    return ( 

        <div className = "App" >
            <h1>Todo List</h1> 
           <form style={{display: "flex", justifyContent: "center"}}>
                <FormControl  style={{marginRight: "1rem"}}>
                    <InputLabel>Write a Todo✅</InputLabel>
                    <Input value={input} onChange={event => setInput(event.target.value)}/>
                </FormControl>
                
                <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
                    Add Todo
                </Button>
            </form>
            <hr style={{width: "75vw", marginTop: "2.5rem"}}/>


            <ul>
                {todos.map(todo => (
                    <Todo todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default App;