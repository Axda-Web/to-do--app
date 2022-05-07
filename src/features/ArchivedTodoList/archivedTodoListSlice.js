import { createSlice } from "@reduxjs/toolkit"


//Slice reducer
export const archivedTodosSliceReducer = createSlice({
    name: 'archivedTodos',
    initialState: [],
    reducers: {
        addArchivedTodo: (state, action) => {
            return [...state, action.payload]
        },

        deleteArchivedTodo: (state, action) => {
            return state.filter( todo => todo.id !== action.payload)
        }
    }
})


export const { addArchivedTodo, deleteArchivedTodo } = archivedTodosSliceReducer.actions
export default archivedTodosSliceReducer.reducer


//Selectors
export const selectArchivedTodos = state => state.archivedTodos