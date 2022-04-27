import React, { useState } from 'react';
import './App.css';

import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';

const  App = () => {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos( prev => ([
      ...prev,
      todo
    ]))
  }

  const setToDone = id => setTodos( prev => {
    return prev.map( todo => {
      if(todo.id === id){
        return {...todo, done: !todo.done}
      }
      return todo
    })
  })

  const deleteTodo = id => {
    setTodos( prev => prev.filter( todo => todo.id !== id))
  }

  return (
    <div className="container text-center mt-5">
      <h1>Todo List</h1>
      <AddTodo  todos={todos}
                addTodo={addTodo}
              />
      <TodoList todos={todos} 
                setToDone={setToDone}
                deleteTodo={deleteTodo}
                />
    </div>
  );
}

export default App;
