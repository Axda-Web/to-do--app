import React from "react";

import './TodoList.css'

import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({todos, completeTodo, deleteTodo, addArchiveTodo}) => {

    const displayTodos = todos.map( todo => <TodoItem   key={todo.id}
                                                        title={todo.title}
                                                        done={todo.done}
                                                        id={todo.id}
                                                        completeTodo={completeTodo}
                                                        deleteTodo={deleteTodo}
                                                        addArchiveTodo={addArchiveTodo}
                                                    />)

    return (
        <div className="list-group text-start">
            {displayTodos}
        </div>
    )
}

export default TodoList