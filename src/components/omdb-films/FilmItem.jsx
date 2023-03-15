import {motion} from "framer-motion";
import PropTypes from "prop-types";
// import {useContext} from "react";
// import OMDbContext from "../context/omdb/OMDbContext";


const FilmItem = ( {film: { Poster }} ) => {

    // const { dispatch, modalId } = useContext(OMDbContext);

    return (

            // <motion.div whileHover={{ scale: 1.05 }}
            //             whileTap={{ scale: 0.9 }}>
                <img src={Poster} alt="profile" className="h-96 w-64 mx-2 my-2 cursor-pointer rounded-md"/>
            // </motion.div>

    );
};

FilmItem.propTypes = {
    film: PropTypes.object.isRequired,
}


export default FilmItem;