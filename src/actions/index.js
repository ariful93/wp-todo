export const addToDo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteToDo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const editProject = (data) => {
    return {
        type: "EDIT_PROJECT",
        payload: {
            data
        }
    }
}

export const addList = (data) => {
    return{
        type: 'ADD_LIST',
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const addCard = (data) => {
    return{
        type: 'ADD_CARD',
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}