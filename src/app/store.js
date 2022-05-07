import { configureStore } from '@reduxjs/toolkit'

//Slice reducers
import todosSliceReducer from '../features/TodoList/todoListSlice'
import archivedTodosSliceReducer from '../features/ArchivedTodoList/archivedTodoListSlice'


const store = configureStore({
    reducer: {
        todos: todosSliceReducer,
        archivedTodos: archivedTodosSliceReducer
    }
})

export default store