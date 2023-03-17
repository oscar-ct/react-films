import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {useContext} from "react";
import glitchContext from "../context/glitch/GlitchContext";


const GlitchItem = ({film: { Poster, imdbID}}) => {

    const { dispatch } = useContext(glitchContext);

    const handleClick = () => {
        dispatch({
            type: "OPEN_GLITCH_FILM",
            payload: imdbID
        });
    }

    return (
        <div onClick={handleClick}>
            <label htmlFor={`my-modal-${imdbID}`}>
                <motion.div whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}>
                    <img src={Poster} alt="profile" className="h-96 w-64 mx-2 my-2 cursor-pointer rounded-md"/>
                </motion.div>
            </label>
        </div>
    );
}


GlitchItem.propTypes = {
    film: PropTypes.object.isRequired,
}

export default GlitchItem;