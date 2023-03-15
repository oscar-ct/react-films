import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import OMDbContext from "../context/omdb/OMDbContext";
import {filmSearch} from "../context/omdb/OMDbActions";
import { motion} from "framer-motion";
import FilmItem from "../omdb-films/FilmItem";




const SearchResults = () => {

    const { isLoading, films, dispatch } = useContext(OMDbContext);
    const params = useParams();



    useEffect(function (){
        const runSearchFromParams = async () => {
            dispatch({
                type: "SET_LOADING"
            });
            const data = await filmSearch(params.text);
            dispatch({
                type: "GET_FILMS",
                payload: data.Search,
            });
        }
        if (films.length === 0) {
            runSearchFromParams(params.text)
        }
    }, [dispatch, films, params.text]);


    if (!isLoading) {
        return (
            <div>
                <div className="mt-6 mb-1">
                    <h1 className="text-2xl text-white">Search Results({films.length})</h1>
                </div>
                <div className="flex flex-wrap justify-center">
                    {films.map(function(film) {
                        return (
                            <motion.div key={film.imdbID} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                                <FilmItem film={film} key={film.imdbID}/>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        );
    }
};

export default SearchResults;