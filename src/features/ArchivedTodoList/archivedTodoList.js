//Initial State
const initialState = []


//Action creators
export const addArchiveTodoActionCreator = todo => {
    return {
        type: 'AddArchiveTodo',
        payload: todo
    }
}

/* const restoreArchiveTodoActionCreator = id => {
    return {
        type: 'restoreArchiveTodo',
        payload: id
    }
} */

export const deleteArchiveTodoActionCreator = id => {
    return {
        type: 'deleteArchiveTodo',
        payload: id
    }
}


//Slice reducer
export const archivedTodosSliceReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'addArchiveTodo':
            return [...state, action.payload]
        /* case 'restoreArchiveTodo': */
        case 'deleteArchiveTodo':
            return state.filter( todo => todo.id !== action.payload)
        default:
            return state
    }
}