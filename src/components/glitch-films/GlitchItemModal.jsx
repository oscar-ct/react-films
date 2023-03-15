import {useContext} from "react";
import glitchContext from "../context/glitch/GlitchContext";
import {favoriteGlitchFilm} from "../context/glitch/GlitchActions";
import Spinner from "../layout/Spinner";


const GlitchItemModal = () => {

    const { modalId, glitchFilms, isLoading, dispatch, isUpdating } = useContext(glitchContext);

    if (!isLoading && modalId != null) {

        const modalFilm = glitchFilms.filter(function (film) {
            return film.id === modalId;
        });
        const { Title, Plot, Rating, Year, Genre, Director, Favorite, WatchList } = modalFilm[0];



        const handleFavoriteAndWatchlist = async (favorite, watchlist) => {
            if (typeof favorite === "boolean" && typeof watchlist === "boolean") {
                dispatch({
                    type: "SET_UPDATING"
                })
                const new_obj = {...modalFilm[0], Favorite: favorite, WatchList: watchlist}
                const data = await favoriteGlitchFilm(modalId, new_obj);
                const new_state = glitchFilms.map(function (film) {
                    if (film.id === modalId) {
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


        return (
            <div>
                <input type="checkbox" id={`my-modal-${modalId}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl bg-transparent/80 text-white">

                        <div className="flex justify-between">
                            <h3 className="font-bold text-3xl pb-5">{Title}</h3>

                            <label className="swap swap-active text-5xl">
                                <input type="checkbox" />
                                {Favorite ? <div className="swap-on">❤️</div> : <div className="swap-on">🎬</div>}
                            </label>
                        </div>

                        <p className="py-4 text-xl">{Plot}</p>

                        <div className="flex justify-center">
                            <div className="stats stats-vertical lg:stats-horizontal shadow mt-6 bg-base-100/90">
                                <div className="stat">
                                    <div className="stat-title">Rating</div>
                                    <div className="stat-value text-3xl font-bold">{Rating}</div>
                                    {/*<div className="stat-desc">Jan 1st - Feb 1st</div>*/}
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Year</div>
                                    <div className="stat-value text-3xl font-bold">{Year}</div>
                                    {/*<div className="stat-desc">↗︎ 400 (22%)</div>*/}
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Director</div>
                                    <div className="stat-value text-3xl font-bold">{Director}</div>
                                    {/*<div className="stat-desc">↘︎ 90 (14%)</div>*/}
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Genre</div>
                                    <div className="stat-value text-3xl font-bold">{Genre}</div>
                                    {/*<div className="stat-desc">↘︎ 90 (14%)</div>*/}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            {isUpdating &&
                            <div className="flex items-end">
                                <Spinner width={40}/>
                            </div>}


                            <div className="flex justify-end items-end">
                                {!Favorite && WatchList?
                                    <button onClick={()=> {
                                        handleFavoriteAndWatchlist(true, false);
                                    }
                                    } className="btn btn-secondary">
                                    Favorite
                                    </button>
                                    :
                                    <button onClick={()=> {
                                        handleFavoriteAndWatchlist(false, true);
                                    }
                                    } className="btn btn-primary  ml-4">
                                    Add To WatchList
                                    </button>
                                }


                                <div className="modal-action ml-4">
                                    <label htmlFor={`my-modal-${modalId}`} className="btn">Close</label>
                                </div>
                             </div>

                        </div>


                    </div>
                </div>

            </div>
        );
    }

}

export default GlitchItemModal;