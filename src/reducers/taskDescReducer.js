const taskDescData = {
    taskdesc: ''
}

const taskDescReducer = ( state=taskDescData, action ) => {
    switch ( action.type ) {
        case "ADD_SUB_DESC":

            const { id, data } = action.payload;

            return {
                ...state,
                taskdesc: [
                    ...state.taskdesc,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        default: return state;
    }
}

export default taskDescReducer;