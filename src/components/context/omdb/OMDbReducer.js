
function omdbReducer (state, action) {
    switch (action.type) {
        case "SET_NO_SEARCH_FOUND":
            return {
                ...state,
                noSearchFound: false,
            }
        case "SET_SEARCH_FOUND":
            return {
                ...state,
                noSearchFound: true,
            }
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
        case "GET_FILM":
            return {
                ...state,
                film: action.payload,
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