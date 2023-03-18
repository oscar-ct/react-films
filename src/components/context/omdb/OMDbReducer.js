
function omdbReducer (state, action) {
    switch (action.type) {
        case "SET_SEARCH_FOUND":
            return {
                ...state,
                noSearchFound: action.payload,
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.payload,
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
        case "SET_ALERTING":
            return {
                ...state,
                isAlerting: action.payload,
            }
        case "SET_SEARCH_STRING":
            return {
                ...state,
                searchString: action.payload,
            }
        default:
            return state;

    }
}

export default omdbReducer;