
function omdbReducer (state, action) {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }
        case "GET_FILMS":
            return {
                ...state,
                films: action.payload,
                isLoading: false,
            }
        case "OPEN_OMDB_FILM":
            return {
                ...state,
                modalId: action.payload,
            }
        default:
            return state;

    }
}

export default omdbReducer;