import React from "react";

import './ArchivedTodoList.css'

import ArchivedTodoItem from "../ArchivedTodoItem/ArchivedTodoItem";

const ArchivedTodoList = ({archiveTodos, restoreTodo, deleteRestoredTodo}) => {

    const displayTodos = archiveTodos.map( todo => <ArchivedTodoItem     key={todo.id + 1}
                                                                        title={todo.title}
                                                                        done={todo.done}
                                                                        id={todo.id}
                                                                        restoreTodo={restoreTodo}
                                                                        deleteRestoredTodo={deleteRestoredTodo}
                                                                />)

    return (
        <div className="list-group text-start mt-3">
            {displayTodos}
        </div>
    )
}

export default ArchivedTodoList