import { createSlice } from "@reduxjs/toolkit"


//Slice reducer
export const todosSliceReducer = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            return [...state, action.payload]
        },

        deleteTodo: (state, action) => {
            return state.filter( todo => todo.id !== action.payload)
        },

        setToDone: (state, action) => {
            return state.map( todo => {
                if(todo.id === action.payload) {
                    return {...todo,
                            done: !todo.done
                        }
                }
                return todo
            })
        }
    }
})


export const { addTodo, deleteTodo, setToDone } = todosSliceReducer.actions
export default todosSliceReducer.reducer


//Selectors

export const selectTodos = state => state.todos