import React from "react";

import './DeletedTodoItem.css'

const DeletedTodoItem = ({title, id, restoreTodo, deleteRestoredTodo}) => {


    const handleRestoreTodoClick = e => {
        restoreTodo(id)
    }

    const handleDeleteTodoArchiveClick = e => {
        deleteRestoredTodo(id)
    }

    return (
        
            <li className={`list-group-item list-group-item-danger d-flex justify-content-between align-items-center`}>
                <div className="heading">{title}</div>
                <div className="icons">
                    <i className="bi bi-upload" onClick={handleRestoreTodoClick}></i>
                    <i className="bi bi-trash3-fill" onClick={handleDeleteTodoArchiveClick}></i>
                </div>
                
            </li>
        
    )
}

export default DeletedTodoItem