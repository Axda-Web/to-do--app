import React from "react";

import { deleteArchivedTodoActionCreator } from '../../features/ArchivedTodoList/archivedTodoListSlice'
import { addTodoActionCreator } from "../../features/TodoList/todoListSlice";

import './ArchivedTodoItem.css'

const ArchivedTodoItem = ({title, id, done, dispatch, state}) => {


    const handleRestoreTodoClick = e => {
        const restoredTodo = state.archivedTodos.find( todo => todo.id === id)
        dispatch(addTodoActionCreator(restoredTodo))
        dispatch(deleteArchivedTodoActionCreator(id))
    }

    const handleDeleteTodoArchiveClick = e => {
        dispatch(deleteArchivedTodoActionCreator(id))
    }

    return (
        
            <li className={`list-group-item ${done ? 'done' : ''} list-group-item-warning d-flex justify-content-between align-items-center`}>
                <div className="heading ">{title}</div>
                <div className="icons">
                    <i className="bi bi-upload" onClick={handleRestoreTodoClick}></i>
                    <i className="bi bi-trash3-fill" onClick={handleDeleteTodoArchiveClick}></i>
                </div>
                
            </li>
        
    )
}

export default ArchivedTodoItem