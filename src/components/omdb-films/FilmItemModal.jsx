import {useContext} from "react";
import OMDbContext from "../context/omdb/OMDbContext";
import Modal from "../layout/assets/Modal";



const FilmItemModal = () => {





    const { modalId, film, isLoading, dispatch, films } = useContext(OMDbContext);

    return (
        <div>
            <Modal modalId={modalId} films={films} isLoading={isLoading} dispatch={dispatch} film={film}/>
        </div>
    );
};

export default FilmItemModal;