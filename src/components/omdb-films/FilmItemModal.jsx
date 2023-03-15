import {useContext} from "react";
import OMDbContext from "../context/omdb/OMDbContext";
import Modal from "../layout/assets/Modal";


const FilmItemModal = () => {


    const { modalId, films, isLoading, dispatch } = useContext(OMDbContext);

    return (
        <div>
            <Modal modalId={modalId} films={films} isLoading={isLoading} dispatch={dispatch}/>
        </div>
    );
};

export default FilmItemModal;