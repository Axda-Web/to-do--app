import React, { useState } from "react";

import './TodoItem.css'

const TodoItem = ({title, id, done, setToDone, deleteTodo}) => {


    const handleValidTodoClick = e => {
        setToDone(id)
    }

    const handleDeleteTodoClick = e => {
        deleteTodo(id)
    }

    return (
        
            <li className={`list-group-item ${done ? 'list-group-item-success done' : ''} d-flex justify-content-between align-items-center`}>
                <div className="heading">{title}</div>
                <div className="icons">
                    <i className={`bi ${done ? 'bi-check-square-fill' : 'bi-check-square'}`} onClick={handleValidTodoClick}></i>
                    <i className="bi bi-trash3" onClick={handleDeleteTodoClick}></i>
                </div>
                
            </li>
        
    )
}

export default TodoItem