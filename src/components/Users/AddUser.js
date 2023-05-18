import React from "react";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={addUserHandler}>
            <label>Username</label>
            <input id="username" htmlFor="username" type="text" />
            <label>Age (Years)</label>
            <input id="age" htmlFor="age" type="number" />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;