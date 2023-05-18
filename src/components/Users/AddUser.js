import React from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Card  className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label>Username</label>
                <input id="username" htmlFor="username" type="text" />
                <label>Age (Years)</label>
                <input id="age" htmlFor="age" type="number" />
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default AddUser;