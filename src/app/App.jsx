import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

//Components
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../features/TodoList/TodoList'
import ArchivedTodoList from '../features/ArchivedTodoList/ArchivedTodoList'

//Selectors
import { selectArchivedTodos } from '../features/ArchivedTodoList/archivedTodoListSlice';
import { selectTodos } from '../features/TodoList/todoListSlice';


const  App = () => {

  const todos = useSelector(selectTodos)
  const archivedTodos = useSelector(selectArchivedTodos)

  const [showArchiveTodos, setShowArchiveTodos] = useState(false)

  const showArchTodos = () => setShowArchiveTodos(!showArchiveTodos)

  return (
    <div className="container-sm text-center mt-5">
      <h1 className='mb-5 logo'>Todo List <i className="bi bi-pencil-fill pen"></i></h1>
      <AddTodo />
      { !todos.length ? <p className='empty-message'>No todos...</p> : <TodoList />}
      { archivedTodos.length > 0 && <button className="btn text-decoration-underline text-start text-primary mt-5" onClick={showArchTodos}>{showArchiveTodos ? 'Mask' : 'Show'} archive items</button> }
      { showArchiveTodos && <ArchivedTodoList />}
    </div>
  );
}

export default App;
