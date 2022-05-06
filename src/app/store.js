import { createStore, combineReducers } from 'redux'


import { todosSliceReducer } from '../features/TodoList/todoListSlice'
import { archivedTodosSliceReducer } from '../features/ArchivedTodoList/archivedTodoListSlice'

const rootReducer = combineReducers({
    todos: todosSliceReducer,
    archivedTodos: archivedTodosSliceReducer
})

export const store = createStore(rootReducer)