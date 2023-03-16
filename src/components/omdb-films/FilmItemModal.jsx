import {useContext} from "react";
import OMDbContext from "../context/omdb/OMDbContext";
import Modal from "../layout/assets/Modal";



const FilmItemModal = () => {

    const { modalId, film, isLoading, dispatch  } = useContext(OMDbContext);

    return (
        <div>
            <Modal modalId={modalId}  isLoading={isLoading} dispatch={dispatch} film={film}/>
        </div>
    );
};

export default FilmItemModal;