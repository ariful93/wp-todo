const initialData = {
    items: []
}

const todoReducers = ( state=initialData, action ) => {
    switch ( action.type ) {
        case "ADD_TODO":

            const { id, data } = action.payload;

            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        
        case "DELETE_TODO":

            const newItem = state.items.filter((item) => item.id !== action.id )
            
            return {
                ...state,
                items: newItem
            }
        
        case "EDIT_PROJECT":

            // var newList = [...state.items];
            // var index = newList.indexOf(state.items);

            // const itemIndex = state.indexOf((item) => item.id === action.id )
            // const updateProjectTitle = {...action.item, items: state[itemIndex].items}

            // return[
            //     ...state.slice(0, itemIndex),
            //     updateProjectTitle,
            //     ...state.slice(itemIndex + 1)
            // ]

            return {
                ...state,
                items: action.payload
            }

            // if (index !== -1) {
            //     newList[index].value = state.title;
            //     return {
            //         ...state,
            //         items:newList
            //     }
            // }

        default: return state;
    }
}

export default todoReducers;