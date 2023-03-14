
function glitchReducer (state, action) {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: false,
            }
        case "GET_GLITCH_FILMS":
            return {
                ...state,
                glitchFilms: action.payload,
                isLoading: false,
            }
        default:
            return state;

    }
}

export default glitchReducer;