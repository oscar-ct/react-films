import {useContext, useEffect} from "react";
import glitchContext from "../context/glitch/GlitchContext";
import {getGlitchFilms} from "../context/glitch/GlitchActions";


const GlitchResults = () => {

    const { dispatch, glitchFilms } = useContext(glitchContext);

    useEffect(function () {
        const handleFetch = async () => {
            dispatch({
                type: "SET_LOADING"
            });
            const data = await getGlitchFilms();
            dispatch({
                type: "GET_GLITCH_FILMS",
                payload: data,
            });
        }
        handleFetch();
    }, [dispatch])



    return (
        <div>

        </div>
    );
};

export default GlitchResults;