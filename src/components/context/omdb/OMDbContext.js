import {createContext, useReducer} from "react";
import omdbReducer from "./OMDbReducer";
import PropTypes from "prop-types";



const OMDbContext = createContext();

export const OMDbProvider = ( {children} ) => {

    const initialState = {
        films: [],
        // glitchFilms: [],
        isLoading: false,
        modalId: null,
        film: [],
        noSearchFound: true,
        isAlerting: false,
        searchString: "",
    }

    const [state, dispatch] = useReducer(omdbReducer, initialState);

    return <OMDbContext.Provider
        value={{
            dispatch,
            films: state.films,
            // glitchFilms: state.glitchFilms,
            isLoading: state.isLoading,
            modalId: state.modalId,
            film: state.film,
            noSearchFound: state.noSearchFound,
            isAlerting: state.isAlerting,
            searchString: state.searchString,
        }}>
        {children}
    </OMDbContext.Provider>
}

OMDbContext.propTypes = {
    children: PropTypes.node.isRequired,
}

export default OMDbContext;
