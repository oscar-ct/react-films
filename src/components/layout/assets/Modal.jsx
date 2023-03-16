import Spinner from "../Spinner";
import ModalIcons from "./ModalIcons";
import ModalButtons from "./ModalButtons";
import glitchContext from "../../context/glitch/GlitchContext";
import {useContext} from "react";

const Modal = ( { modalId, film, isLoading } ) => {

    const { glitchFilms, isUpdating } = useContext(glitchContext);

    const modalFilmObj = glitchFilms.filter(function (glitchFilm) {
        return glitchFilm.imdbID === modalId;
    });

    if (!isLoading && modalId != null) {

        // This data is from glitch or omdb
        const { Title, Plot, Rating, Year, Genre, Director, imdbID} = film;

        return (
            <div>
                <input type="checkbox" id={`my-modal-${modalId}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl bg-transparent/80 text-white">

                        <div className="flex justify-between">
                            <h3 className="font-bold text-3xl pb-5">{Title}</h3>
{/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
                            <ModalIcons modalIdObj={modalFilmObj}/>
                        </div>
                        <p className="py-4 text-xl">{Plot}</p>
                        <div className="flex justify-center">
                            <div className="stats stats-vertical lg:stats-horizontal shadow mt-6 bg-base-100/90">
                                <div className="stat">
                                    <div className="stat-title">Rotten Tomatoes Rating</div>
                                    <div className="stat-value text-3xl font-bold">{!film.hasOwnProperty("Ratings")  ? Rating : film.Ratings[0].Value}</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Year</div>
                                    <div className="stat-value text-3xl font-bold">{Year}</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Director</div>
                                    <div className="stat-value text-3xl font-bold">{Director}</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Genre</div>
                                    <div className="stat-value text-3xl font-bold">{Genre}</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            {isUpdating &&
                                <div className="flex items-end">
                                    <Spinner width={40}/>
                                </div>}

                            <div className="flex justify-end items-end">
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
                                <ModalButtons modalIdObj={modalFilmObj} imdbID={imdbID}/>
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

};

export default Modal;