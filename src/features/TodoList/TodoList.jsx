import React from "react";

import './TodoList.css'

import TodoItem from '../../components/TodoItem/TodoItem'

const TodoList = ({state, dispatch}) => {

    const displayTodos = state.todos.map( todo => <TodoItem     key={todo.id}
                                                                title={todo.title}
                                                                done={todo.done}
                                                                id={todo.id}
                                                                dispatch={dispatch}
                                                                state={state}
                                                    />)

    return (
        <div className="list-group text-start">
            {displayTodos}
        </div>
    )
}

export default TodoList