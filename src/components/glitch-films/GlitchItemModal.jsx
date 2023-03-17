import {useContext} from "react";
import glitchContext from "../context/glitch/GlitchContext";
import Modal from "../layout/assets/Modal";


const GlitchItemModal = () => {

    const { modalId, glitchFilms, isLoading } = useContext(glitchContext);

    if (!isLoading && modalId != null) {
        const modalFilm = glitchFilms.filter(function (film) {
            return film.imdbID === modalId;
        });
        return <Modal film={modalFilm[0]} modalId={modalId} isLoading={isLoading} />
    }

}

export default GlitchItemModal;