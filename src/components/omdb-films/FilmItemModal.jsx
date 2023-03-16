import {useContext} from "react";
import OMDbContext from "../context/omdb/OMDbContext";
import Modal from "../layout/assets/Modal";



const FilmItemModal = () => {

    const { modalId, film, isLoading } = useContext(OMDbContext);

    return (
        <Modal modalId={modalId}  isLoading={isLoading}  film={film}/>
    );
};

export default FilmItemModal;