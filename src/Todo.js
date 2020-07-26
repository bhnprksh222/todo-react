import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';

import './Todo.css';

function Todo(props) {
    return (
        <div>
            <List>
                <ListItem button>
                    {/* <ListItemAvatar>
                    </ListItemAvatar> */}
                    <ListItemText primary={props.text} secondary="Dummy deadline"/>
                </ListItem>
            </List>
        </div>
    )
}

export default Todo;
