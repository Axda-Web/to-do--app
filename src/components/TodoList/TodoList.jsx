import React, { useState } from "react";

import './TodoList.css'

import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {

    return (
        <div className="list-group text-start">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default TodoList