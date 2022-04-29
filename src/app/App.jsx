import React, { useState } from 'react';
import './App.css';

import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';
import DeletedTodoList from '../components/DeletedToDoList/DeletedTodoList';

const  App = () => {

  const [todos, setTodos] = useState([])
  const [archiveTodos, setArchiveTodos] = useState([])
  const [showArchiveTodos, setShowArchiveTodos] = useState(false)

  //Todo items
  const addTodo = (todo) => {
    setTodos( prev => ([
      ...prev,
      todo
    ]))
  }

  const completeTodo = id => setTodos( prev => {
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
  


  //Archive todo items
  const addArchiveTodo = id => {
    const delItem = todos.filter( todo => todo.id === id)
    setArchiveTodos( prev => ([
      ...delItem,
      ...prev
    ]))
  }

  const showArchTodos = () => setShowArchiveTodos(!showArchiveTodos)

  const restoreTodo = id => {
    const restoredItem = archiveTodos.filter( todo => todo.id === id)
    addTodo(...restoredItem)
    deleteRestoredTodo(id)
  }

  const deleteRestoredTodo = id => {
    setArchiveTodos( prev => prev.filter( todo => todo.id !== id))
  }

  return (
    <div className="container-sm text-center mt-5">
      <h1 className='mb-5'>Todo List</h1>
      <AddTodo  todos={todos}
                addTodo={addTodo}
              />
      
      { !todos.length ? <p className='empty-message'>No todos...</p> : <TodoList  todos={todos}
                                                        deleteTodo={deleteTodo}
                                                        addArchiveTodo={addArchiveTodo}
                                                        completeTodo={completeTodo}
                                                        />}

      { archiveTodos.length > 0 && <button className="btn text-decoration-underline text-start mt-5" onClick={showArchTodos}>{showArchiveTodos ? 'Mask' : 'Show'} archive items</button> }
      { showArchiveTodos && <DeletedTodoList  archiveTodos={archiveTodos}
                        restoreTodo={restoreTodo}
                        deleteRestoredTodo={deleteRestoredTodo}
                        />}
    </div>
  );
}

export default App;
