import React, { useState } from "react";

import './AddTodo.css'

const AddTodo = ({todos, addTodo}) => {

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
        addTodo({
            id: generateRandomId(),
            title: text,
            done: false
        })
        setText('')
    }

    return (
        <div className="input-group mb-3">
            <input  type="text"
                    className="form-control"
                    placeholder="New Todo..." 
                    aria-label="New Todo..."
                    value={text}
                    onChange={handleInputChange}
                />
            <button className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={handleBtnClick}>Add</button>
        </div>
    )
}

export default AddTodo