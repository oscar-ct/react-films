import { filmSearch } from "../context/OMDbActions";
import {useEffect} from "react";


const FilmSearch = () => {


    const fetchFilms =  filmSearch("tron")

    return (
        <div>

        </div>
    );
};

export default FilmSearch;