import React from "react";
import './TodoItem.css'

//Action creators
import { setToDone, deleteTodo } from "../../features/TodoList/todoListSlice";
import { addArchivedTodo } from "../../features/ArchivedTodoList/archivedTodoListSlice";

//Selectors
import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "../../features/TodoList/todoListSlice";


const TodoItem = ({title, id, done}) => {

    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()


    const handleValidTodoClick = e => {
        dispatch(setToDone(id))
    }

    const handleArchiveTodoClick = e => {
        const archivedItem = todos.find( todo => todo.id === id)
        dispatch(addArchivedTodo(archivedItem))
        dispatch(deleteTodo(id))
    }

    const handleDeleteTodoClick = e => {
        dispatch(deleteTodo(id))
    }

    return (
        
            <li className={`list-group-item ${done ? 'list-group-item-success done' : ''} d-flex justify-content-between align-items-center`}>
                <div className="heading">{title}</div>
                <div className="icons">
                    <i className={`bi ${done ? 'bi-check-square-fill' : 'bi-check-square'}`} onClick={handleValidTodoClick}></i>
                    <i className="bi bi-archive" onClick={handleArchiveTodoClick}></i>
                    <i className="bi bi-trash3" onClick={handleDeleteTodoClick}></i>
                </div>
                
            </li>
        
    )
}

export default TodoItem