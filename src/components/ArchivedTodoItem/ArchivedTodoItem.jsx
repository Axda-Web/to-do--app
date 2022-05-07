import React from "react";
import './ArchivedTodoItem.css'

//Action creators
import { deleteArchivedTodo } from '../../features/ArchivedTodoList/archivedTodoListSlice'
import { addTodo } from "../../features/TodoList/todoListSlice";

//Selectors
import { useSelector, useDispatch } from "react-redux";
import { selectArchivedTodos } from "../../features/ArchivedTodoList/archivedTodoListSlice";


const ArchivedTodoItem = ({title, id, done}) => {

    const archivedTodos = useSelector(selectArchivedTodos)
    const dispatch = useDispatch()

    const handleRestoreTodoClick = e => {
        const restoredTodo = archivedTodos.find( todo => todo.id === id)
        dispatch(addTodo(restoredTodo))
        dispatch(deleteArchivedTodo(id))
    }

    const handleDeleteTodoArchiveClick = e => {
        dispatch(deleteArchivedTodo(id))
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