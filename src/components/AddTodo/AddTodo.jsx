import React, { useState } from "react";
import './AddTodo.css'

//Action creators
import { addTodo } from "../../features/TodoList/todoListSlice";

//Selectors
import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "../../features/TodoList/todoListSlice";


const AddTodo = () => {

    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    const [text, setText] = useState('')

    const generateRandomId = () => {
        let randomId = Math.floor(Math.random() * 100)

        // eslint-disable-next-line no-loop-func
        while (todos.find( todo => todo.id === randomId)){
            randomId = Math.floor(Math.random() * 100)
        }
        return randomId
    }

    const handleInputChange = e => {
        setText(e.target.value)
    }

    const handleBtnClick = e => {
        e.preventDefault()
        dispatch(addTodo({
            id: generateRandomId(),
            title: text,
            done: false
        }))
        setText('')
    }

    return (
        <>
        <div className="input-group mb-3">
            <input  type="text"
                    className="form-control"
                    placeholder="New Todo..." 
                    aria-label="New Todo..."
                    value={text}
                    onChange={handleInputChange}
                />
            <button className="btn btn-primary"
                    type="button"
                    id="button-addon2"
                    disabled={text.length > 2 ? false : true}
                    onClick={handleBtnClick}>Add</button>
        </div>
        { text.length < 3 && text.length !== 0 && <div className="input-feedback text-start text-danger mb-5">The name must be 3 characters at least</div>}
    </>
    )
}

export default AddTodo