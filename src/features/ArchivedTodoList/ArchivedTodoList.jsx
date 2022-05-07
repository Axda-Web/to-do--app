import React from "react";

import './ArchivedTodoList.css'

import ArchivedTodoItem from "../../components/ArchivedTodoItem/ArchivedTodoItem";

import { useSelector } from "react-redux";
import { selectArchivedTodos } from "./archivedTodoListSlice";

const ArchivedTodoList = () => {

    const archivedTodos = useSelector(selectArchivedTodos)

    const displayTodos = archivedTodos.map( todo => <ArchivedTodoItem   key={todo.id + 1}
                                                                        title={todo.title}
                                                                        done={todo.done}
                                                                        id={todo.id}
                                                                        />)

    return (
        <div className="list-group text-start mt-3">
            {displayTodos}
        </div>
    )
}

export default ArchivedTodoList