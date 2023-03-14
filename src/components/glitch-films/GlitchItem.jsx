import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {useContext} from "react";
import glitchContext from "../context/glitch/GlitchContext";



const GlitchItem = ({film: { Poster, id}}) => {

    const { dispatch, modalId } = useContext(glitchContext);

    const handleClick = () => {
        dispatch({
            type: "OPEN_GLITCH_FILM",
            payload: id
        })

    }

    return (
        <div onClick={handleClick}>
            <label htmlFor={`my-modal-${modalId}`}>
                <motion.div whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                    <img src={Poster} alt="profile" className="h-96 w-64 mx-2 my-2 cursor-pointer"/>
                </motion.div>
            </label>
        </div>
    );
}


GlitchItem.propTypes = {
    film: PropTypes.object.isRequired,
}

export default GlitchItem;