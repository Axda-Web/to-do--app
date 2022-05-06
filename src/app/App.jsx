import React, { useState } from 'react';
import './App.css';

import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../features/TodoList/TodoList'
import ArchivedTodoList from '../features/ArchivedTodoList/ArchivedTodoList'

const  App = ({state, dispatch}) => {

  const [showArchiveTodos, setShowArchiveTodos] = useState(false)

  const showArchTodos = () => setShowArchiveTodos(!showArchiveTodos)

  return (
    <div className="container-sm text-center mt-5">
      <h1 className='mb-5 logo'>Todo List <i className="bi bi-pencil-fill pen"></i></h1>

      <AddTodo state={state} dispatch={dispatch} />
      
      { !state.todos.length ? <p className='empty-message'>No todos...</p> : <TodoList state={state} dispatch={dispatch} />}

      { state.archivedTodos.length > 0 && <button className="btn text-decoration-underline text-start text-primary mt-5" onClick={showArchTodos}>{showArchiveTodos ? 'Mask' : 'Show'} archive items</button> }
      { showArchiveTodos && <ArchivedTodoList  state={state} dispatch={dispatch} />}
    </div>
  );
}

export default App;
