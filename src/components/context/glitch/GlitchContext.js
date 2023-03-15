import {createContext, useReducer} from "react";
import glitchReducer from "./GlitchReducer";
import PropTypes from "prop-types";



const GlitchContext = createContext();

export const GlitchProvider = ( {children} ) => {

    const initialState = {
        glitchFilms: [],
        isLoading: false,
        modalId: null,
        isUpdating: false,
    }

    const [state, dispatch] = useReducer(glitchReducer, initialState);

    return <GlitchContext.Provider
        value={{
            dispatch,
            glitchFilms: state.glitchFilms,
            isLoading: state.isLoading,
            modalId: state.modalId,
            isUpdating: state.isUpdating
        }}>
        {children}
    </GlitchContext.Provider>
}

GlitchContext.propTypes = {
    children: PropTypes.node.isRequired,
}

export default GlitchContext;
