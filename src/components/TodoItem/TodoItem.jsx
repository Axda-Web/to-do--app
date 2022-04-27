import React from "react";

import './TodoItem.css'

const TodoItem = ({title, id, done, setToDone}) => {

    const handleTodoClick = e => {
        console.log('clicked!')
        setToDone(id)
    }

    return (
        
            <li className={`list-group-item ${done ? 'list-group-item-success done' : ''} d-flex justify-content-between align-items-center`}>
                <div className="heading">{title} </div>
                <div className="icons">
                    <i className={`bi ${done ? 'bi-check-square-fill' : 'bi-check-square'}`} onClick={handleTodoClick}></i>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash3"></i>
                </div>
                
            </li>
        
    )
}

export default TodoItem