import {useContext} from "react";
import glitchContext from "../../context/glitch/GlitchContext";
import {addGlitchFilm, deleteGlitchFilm, updateGlitchFilm} from "../../context/glitch/GlitchActions";

const ModalButtons = ( { modalIdObj, imdbID } ) => {

    const { dispatch, glitchFilms } = useContext(glitchContext);

    // const handleFavoriteAndWatchlist = async (favorite, watchlist) => {
    //     if (typeof favorite === "boolean" && typeof watchlist === "boolean") {
    //         dispatch({
    //             type: "SET_UPDATING"
    //         })
    //         const new_obj = {...modalIdObj[0], Favorite: favorite, WatchList: watchlist}
    //         const data = await updateGlitchFilm(modalIdObj[0].id, new_obj);
    //         const new_state = glitchFilms.map(function (film) {
    //             if (film.id === modalIdObj[0].id) {
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

    const handleDelete = async (id) => {
        // dispatch({
        //     type: "SET_LOADING"
        // });
        await deleteGlitchFilm(id);
        let new_state = [];
        for (let i = 0; i < glitchFilms.length; i++) {
            if (modalIdObj[0].id !== glitchFilms[i].id ) {
                new_state = [...new_state, glitchFilms[i]]
            }
        }
        dispatch({
            type: "GET_GLITCH_FILMS",
            payload: new_state
        });
        dispatch({
            type: "OPEN_GLITCH_FILM",
            payload: null
        })
    }

    const handleAdd = async (id, Favorite, Watchlist) => {
        if (typeof Favorite === "boolean" && typeof Watchlist === "boolean" && Favorite) {
            const data = await addGlitchFilm(id, true, false);
            dispatch({
                type: "GET_GLITCH_FILMS",
                payload: [data, ...glitchFilms]
            });
        } else if (typeof Favorite === "boolean" && typeof Watchlist === "boolean" && Watchlist) {
            const data = await addGlitchFilm(id, false, true);
            dispatch({
                type: "GET_GLITCH_FILMS",
                payload: [data, ...glitchFilms]
            });
        }
    }



    if (modalIdObj.length !== 0) {
        const { Favorite, WatchList, id } = modalIdObj[0];

        if (!Favorite && WatchList) {
            return (
                <button onClick={()=> {
                    handleDelete(id);
                }
                } className="btn btn-primary">
                    Remove From Watchlist
                </button>
            )
        } else if (Favorite && !WatchList) {
            return (
                <button onClick={()=> {
                    handleDelete(id);
                }
                } className="btn btn-primary ml-4">
                    UnFavorite
                </button>
            )
        }
    } else {
        return (
            <div>
                <button onClick={() => {
                    handleAdd(`${imdbID}`, true, false);
                }} className="btn btn-secondary">
                    Favorite
                </button>
                <button onClick={() => {
                    handleAdd(`${imdbID}`, false, true);
                }} className="btn btn-primary ml-4">
                    Add To Watchlist
                </button>
            </div>
        )
    }


};

export default ModalButtons;