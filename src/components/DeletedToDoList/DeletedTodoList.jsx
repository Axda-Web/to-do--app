import React from "react";

import './DeletedTodoList.css'

import DeletedTodoItem from "../DeletedTodoItem/DeletedTodoItem";

const DeletedTodoList = ({archiveTodos, restoreTodo, deleteRestoredTodo}) => {

    const displayTodos = archiveTodos.map( todo => <DeletedTodoItem     key={todo.id + 1}
                                                                        title={todo.title}
                                                                        done={todo.done}
                                                                        id={todo.id}
                                                                        restoreTodo={restoreTodo}
                                                                        deleteRestoredTodo={deleteRestoredTodo}
                                                                />)

    return (
        <div className="list-group text-start">
            {displayTodos}
        </div>
    )
}

export default DeletedTodoList