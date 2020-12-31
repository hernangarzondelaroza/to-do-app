const todoReducer = (state = 'to-do', action) => {
    switch(action.type) {
        case 'TODO':
            return state = 'to-do'
        case 'DONE':
            return state = 'done'
        default:
            return state;
    }
}

export default todoReducer;
