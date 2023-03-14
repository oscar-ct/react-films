import {useContext} from "react";
import glitchContext from "../context/glitch/GlitchContext";


const GlitchItemModal = () => {

    const { modalId, glitchFilms, isLoading } = useContext(glitchContext);

    if (!isLoading && modalId != null) {

        const modalFilm = glitchFilms.filter(function (film) {
            return film.id === modalId;
        });
        const {Title, Plot} = modalFilm[0];

        return (
            <div>
                <input type="checkbox" id={`my-modal-${modalId}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">{Title}</h3>
                        <p className="py-4">{Plot}</p>
                        <div className="modal-action">
                            <label htmlFor={`my-modal-${modalId}`} className="btn">Close</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default GlitchItemModal;