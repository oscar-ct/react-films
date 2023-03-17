
function glitchReducer (state, action) {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }
        case "SET_UPDATING":
            return {
                ...state,
                isUpdating: true,
            }
        case "GET_GLITCH_FILMS":
            return {
                ...state,
                glitchFilms: action.payload,
                isLoading: false,
                isUpdating: false,
            }
        case "OPEN_GLITCH_FILM":
            return {
                ...state,
                modalId: action.payload,
            }
        case "SET_ALERTING":
            return {
                ...state,
                isAlerting: action.payload,
            }
        default:
            return state;

    }
}

export default glitchReducer;