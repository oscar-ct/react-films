import { filmSearch } from "../context/OMDBActions";
import {useEffect} from "react";


const FilmSearch = () => {

    useEffect(function () {

    }, []);

    const fetchFilms =  filmSearch("tron")

    return (
        <div>

        </div>
    );
};

export default FilmSearch;