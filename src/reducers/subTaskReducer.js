const subTask = {
    tasks: []
}

const subTaskReducer = ( state=subTask, action ) => {
    switch ( action.type ) {
        case "ADD_SUB_TASK":

            const { id, data } = action.payload;

            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        default: return state;
    }
}

export default subTaskReducer;