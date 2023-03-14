
function omdbReducer (state, action) {
    switch (action.type) {
        case "GET_FILMS":
            return {
                ...state,
                films: action.payload,
                isLoading: false,
            }
        default:
            return state;

    }
}

export default omdbReducer;