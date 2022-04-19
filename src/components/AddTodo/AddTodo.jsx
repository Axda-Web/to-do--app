import React, { useState } from "react";

import './AddTodo.css'

const AddTodo = () => {

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="New Todo..." aria-label="New Todo..." aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
        </div>
    )
}

export default AddTodo