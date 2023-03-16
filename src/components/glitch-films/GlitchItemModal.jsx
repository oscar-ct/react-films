import {useContext} from "react";
import glitchContext from "../context/glitch/GlitchContext";
import {favoriteGlitchFilm} from "../context/glitch/GlitchActions";
import Spinner from "../layout/Spinner";
import Modal from "../layout/assets/Modal";


const GlitchItemModal = () => {

    const { modalId, glitchFilms, isLoading, dispatch, isUpdating } = useContext(glitchContext);

    if (!isLoading && modalId != null) {

        const modalFilm = glitchFilms.filter(function (film) {
            return film.imdbID === modalId;
        });

        const { Title, Plot, Rating, Year, Genre, Director, Favorite, WatchList, id} = modalFilm[0];


        // const handleFavoriteAndWatchlist = async (favorite, watchlist) => {
        //     if (typeof favorite === "boolean" && typeof watchlist === "boolean") {
        //         dispatch({
        //             type: "SET_UPDATING"
        //         })
        //         const new_obj = {...modalFilm[0], Favorite: favorite, WatchList: watchlist}
        //         const data = await favoriteGlitchFilm(id, new_obj);
        //         const new_state = glitchFilms.map(function (film) {
        //             if (film.id === id) {
        //                 return {...film, ...data}
        //             } else {
        //                 return film
        //             }
        //         });
        //         dispatch({
        //             type: "GET_GLITCH_FILMS",
        //             payload: new_state
        //         });
        //     }
        // }

        return <Modal film={modalFilm[0]} modalId={modalId} isLoading={isLoading} dispatch={dispatch}/>

    }

}

export default GlitchItemModal;