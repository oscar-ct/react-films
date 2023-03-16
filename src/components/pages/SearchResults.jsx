import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import OMDbContext from "../context/omdb/OMDbContext";
import {filmSearch} from "../context/omdb/OMDbActions";
import { motion} from "framer-motion";
import FilmItem from "../omdb-films/FilmItem";
import FilmNoResults from "../omdb-films/FilmNoResults";




const SearchResults = () => {

    const { isLoading, films, dispatch } = useContext(OMDbContext);
    const params = useParams();



    useEffect(function (){
        const runSearchFromParams = async (text) => {
            dispatch({
                type: "SET_LOADING"
            });
            const data = await filmSearch(text)
            console.log(data.Response)
            if (data.Response === "True") {
                dispatch({
                    type: "GET_FILMS",
                    payload: data.Search,
                });
            } else {
                dispatch({
                    type: "GET_FILMS",
                    payload: [],
                });
            }
        }
        if (films.length === 0) {
            runSearchFromParams(params.text);
        }
    }, [dispatch, films, params.text]);


    if (!isLoading && films.length !== 0) {
        return (
            <div>
                <div className="py-6">
                    <div className="text-2xl text-white text-center">Search Results<span className="pl-2 font-bold">({films.length})</span></div>
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
    } else {
        return (
           <FilmNoResults/>
        )
    }
};

export default SearchResults;