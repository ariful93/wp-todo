const addListData = {
    lists: []
}

const listReducer = ( state=addListData, action ) => {
    switch ( action.type ) {
        case "ADD_LIST":

            const { id, data } = action.payload;

            return {
                ...state,
                lists: [
                    ...state.lists,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        default: return state;
    }
}

export default listReducer;