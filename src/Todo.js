import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button, Modal, TextField } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import { makeStyles } from '@material-ui/core/styles';

import classes from './Todo.module.css';
import db from './firebase';



function Todo(props) { 
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true});
        setOpen(false);
    };

    return (
        <React.Fragment className={classes.middle}>
            <Modal
            open={open}
            onClose={e => setOpen(false)}
            className={classes.center}
            >
                <div  className={classes.modal}>
                    <h1>Update TODO</h1>
                    {/* <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} /> */}
                    <TextField 
                        placeholder={props.todo.todo} 
                        value={input} 
                        onChange={event => setInput(event.target.value)} 
                        variant="outlined" 
                        style={{marginBottom: "1rem"}}/>
                    <Button 
                        onClick={updateTodo} 
                        variant="contained"
                        disabled={!input}
                    >Update Todo</Button>
                </div>
            </Modal>
            <List className={classes.singleLine} >
                <ListItem  style={{width: "50vw", height: "2rem"}}>
                    <ListItemText primary={props.todo.todo}/>
                </ListItem>
                <Button 
                    style={{marginRight: "1rem"}} 
                    onClick={e => setOpen(true)}
                    variant="contained"
                >Edit</Button>
                <Button 
                    variant="contained" color="secondary"
                    onClick={event => { 
                    db.collection('todos').doc(props.todo.id).delete()
                    }}
                >
                    <DeleteForeverIcon className={classes.hover}></DeleteForeverIcon>
                    DELETE
                </Button>
            </List>
        </React.Fragment>
    );
}

export default Todo;
