import React from "react";
import { useSelector } from "react-redux";
import './TodoList.css'

//Components
import TodoItem from '../../components/TodoItem/TodoItem'

//Selectors
import { selectTodos } from "./todoListSlice";


const TodoList = () => {

    const todos = useSelector(selectTodos)

    const displayTodos = todos.map( todo => <TodoItem   key={todo.id}
                                                        title={todo.title}
                                                        done={todo.done}
                                                        id={todo.id}
                                                    />)

    return (
        <div className="list-group text-start">
            {displayTodos}
        </div>
    )
}

export default TodoList