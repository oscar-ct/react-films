import {motion} from "framer-motion";
import PropTypes from "prop-types";
import {useContext} from "react";
import OMDbContext from "../context/omdb/OMDbContext";
import {filmData} from "../context/omdb/OMDbActions";


const FilmItem = ( {film: { Poster, imdbID }} ) => {

    const { dispatch } = useContext(OMDbContext);

    const handleClick = async () => {
        dispatch({
            type: "OPEN_OMDB_FILM",
            payload: imdbID
        })
        const data = await filmData(`${imdbID}`);
        dispatch({
            type: "GET_FILM",
            payload: data,
        })

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
};

FilmItem.propTypes = {
    film: PropTypes.object.isRequired,
}


export default FilmItem;