import React from "react";

import './ArchivedTodoList.css'

import ArchivedTodoItem from "../../components/ArchivedTodoItem/ArchivedTodoItem";

const ArchivedTodoList = ({state, dispatch}) => {

    const displayTodos = state.archivedTodos.map( todo => <ArchivedTodoItem     key={todo.id + 1}
                                                                                title={todo.title}
                                                                                done={todo.done}
                                                                                id={todo.id}
                                                                                dispatch={dispatch}
                                                                                state={state}
                                                                                />)

    return (
        <div className="list-group text-start mt-3">
            {displayTodos}
        </div>
    )
}

export default ArchivedTodoList