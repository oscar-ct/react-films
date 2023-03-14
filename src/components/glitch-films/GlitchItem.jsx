import PropTypes from "prop-types";
import { motion } from "framer-motion";


const GlitchItem = ({film: { Poster, imdbID}}) => {
    return (
            <motion.div whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                <img src={Poster} alt="profile" className="h-96 w-64 mx-2 my-2 cursor-pointer"/>
            </motion.div>
    );
}


GlitchItem.propTypes = {
    film: PropTypes.object.isRequired,
}

export default GlitchItem;