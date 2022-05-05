
//Initial State
const initialState = []


//Action creators
export const addTodoActionCreator = todo => {
    return {
        type: 'addTodo',
        payload: todo
    }
}

export const deleteTodoActionCreator = id => {
    return {
        type: 'deleteTodo',
        payload: id
    }
}

export const setTodoToDoneActionCreator = id => {
    return {
        type: 'setTodoToDone',
        payload: id
    }
}


//Slice reducer
export const todosSliceReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'addTodo':
            return [...state, action.payload]
        case 'deleteTodo':
            return state.filter( todo => todo.id !== action.payload)
        case 'setTodoToDone':
            return state.map( todo => {
                if(todo.id === action.payload) {
                    return {...todo,
                            done: !todo.done
                        }
                }
                return todo
            })
        default:
            return state
    }
}