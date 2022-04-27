import React from "react";

import './TodoList.css'

import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({todos, setToDone, deleteTodo}) => {

    const displayTodos = todos.map( todo => <TodoItem   key={todo.id}
                                                        title={todo.title}
                                                        done={todo.done}
                                                        id={todo.id}
                                                        setToDone={setToDone}
                                                        deleteTodo={deleteTodo}
                                                    />)

    return (
        <div className="list-group text-start">
            {displayTodos}
        </div>
    )
}

export default TodoList