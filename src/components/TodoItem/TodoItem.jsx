import React, { useState } from "react";

import './TodoItem.css'

const TodoItem = () => {

    return (
        <div>
            <label className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" />
            Fifth checkbox
            </label>
        </div>
    )
}

export default TodoItem