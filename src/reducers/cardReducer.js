const cardData = {
    cards: []
}

const cardReducer = ( state=cardData, action ) => {
    switch ( action.type ) {
        case "ADD_CARD":

            const { id, data } = action.payload;

            return {
                ...state,
                cards: [
                    ...state.cards,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        default: return state;
    }
}

export default cardReducer;