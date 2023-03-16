import {useContext} from "react";
import glitchContext from "../../context/glitch/GlitchContext";
import {favoriteGlitchFilm} from "../../context/glitch/GlitchActions";

const ModalButtons = ( { modalIdObj } ) => {

    const { dispatch, glitchFilms } = useContext(glitchContext);

    const handleFavoriteAndWatchlist = async (favorite, watchlist) => {
        if (typeof favorite === "boolean" && typeof watchlist === "boolean") {
            dispatch({
                type: "SET_UPDATING"
            })
            const new_obj = {...modalIdObj[0], Favorite: favorite, WatchList: watchlist}
            const data = await favoriteGlitchFilm(modalIdObj[0].id, new_obj);
            const new_state = glitchFilms.map(function (film) {
                if (film.id === modalIdObj[0].id) {
                    return {...film, ...data}
                } else {
                    return film
                }
            });
            dispatch({
                type: "GET_GLITCH_FILMS",
                payload: new_state
            });
        }
    }

    if (modalIdObj.length !== 0) {
        const { Favorite, WatchList } = modalIdObj[0];

        if (!Favorite && WatchList) {
            return (
                <button onClick={()=> {
                    handleFavoriteAndWatchlist(true, false);
                }
                } className="btn btn-secondary">
                    Favorite
                </button>
            )
        } else if (Favorite && !WatchList) {
            return (
                <button onClick={()=> {
                    handleFavoriteAndWatchlist(false, true);
                }
                } className="btn btn-primary ml-4">
                    Add To WatchList
                </button>
            )
        }
    } else {
        return (
            <div>
                <button className="btn btn-secondary">
                    Favorite
                </button>
                <button className="btn btn-primary ml-4">
                    Add To Watchlist
                </button>
            </div>
        )
    }


};

export default ModalButtons;