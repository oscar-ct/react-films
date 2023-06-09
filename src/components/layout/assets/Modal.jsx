import Spinner from "../Spinner";
// import ModalIcons from "./ModalIcons";
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
        const { Title, Plot, Rating, Year, Genre, Director, Actors, imdbID, Poster} = film;

        return (
            <div>
                <input type="checkbox" id={`my-modal-${modalId}`} className="modal-toggle" />
                <div className="modal">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <div className="modal-box w-11/12 max-w-5xl text-white bg-black/90" >
                        <div id="modalBg" style={{backgroundImage: `url(${Poster})`}}/>
                        <div className="flex flex-row justify-between items-start">
                            <div className="font-bold text-2xl md:text-3xl pb-5">{Title}</div>
{/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*                            <ModalIcons modalIdObj={modalFilmObj}/>*/}

                            <div className="modal-action my-0 py-0">
                                <label htmlFor={`my-modal-${modalId}`} className="btn btn-error text-white">Close</label>
                            </div>

                        </div>
                        <p className="py-4 text-l md:text-xl">{Plot}</p>
                        <div className="flex justify-center">
                            <div className="stats stats-vertical lg:stats-horizontal shadow mt-6 bg-base-100/90">
                                <div className="stat">
                                    <div className="stat-title">Rating</div>
                                    <div className="stat-value text-xl md:text-2xl font-bold">{!film.hasOwnProperty("Ratings")  ? Rating : film.hasOwnProperty("Ratings") && film.Ratings.length !== 0 ? film.Ratings[0].Value : "N/A"}</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Year</div>
                                    <div className="stat-value text-xl md:text-2xl font-bold">{Year}</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Genre</div>
                                    <div className=" text-xl md:text-2xl font-bold keep-all">{Genre}</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Actors</div>
                                    <div className="text-xl md:text-2xl font-bold keep-all">{Actors}</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Director</div>
                                    <div className="stat-value text-xl md:text-2xl font-bold">{Director}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            {isUpdating &&
                                <div className="flex items-end">
                                    <Spinner width={40}/>
                                </div>}

                            <div className="flex flex-row justify-between items-end">
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*                                <div className={"fixed left-5"}>*/}
{/*                                    <ModalIcons modalIdObj={modalFilmObj}/>*/}
{/*                                </div>*/}

                                <div className={"mt-8 mb-2"}>
                                    <ModalButtons modalIdObj={modalFilmObj} imdbID={imdbID}/>
                                </div>
                                {/*<div className="modal-action ml-4">*/}
                                {/*    <label htmlFor={`my-modal-${modalId}`} className="btn">Close</label>*/}
                                {/*</div>*/}
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        );
    }

};

export default Modal;