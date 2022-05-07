//Initial State
const initialState = []


//Action creators
export const addArchivedTodoActionCreator = todo => {
    return {
        type: 'addArchivedTodo',
        payload: todo
    }
}


export const deleteArchivedTodoActionCreator = id => {
    return {
        type: 'deleteArchivedTodo',
        payload: id
    }
}


//Slice reducer
export const archivedTodosSliceReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'addArchivedTodo':
            return [...state, action.payload]
        case 'deleteArchivedTodo':
            return state.filter( todo => todo.id !== action.payload)
        default:
            return state
    }
}


//Selectors
export const selectArchivedTodos = state => state.archivedTodos