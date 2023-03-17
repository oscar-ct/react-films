import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import OMDbContext from "../context/omdb/OMDbContext";
import {filmSearch} from "../context/omdb/OMDbActions";
import { motion} from "framer-motion";
import FilmItem from "../omdb-films/FilmItem";
import FilmNoResults from "../omdb-films/FilmNoResults";
import LargeSpinner from "../layout/LargeSpinner";


const SearchResults = () => {

    // const [noSearchFound, setNoSearchFound] = useState(true);

    const { isLoading, films, dispatch, noSearchFound, } = useContext(OMDbContext);
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
                dispatch({
                    type: "SET_SEARCH_FOUND",
                });
            } else {
                // setNoSearchFound(false);
                dispatch({
                    type: "SET_NO_SEARCH_FOUND",
                });
                dispatch({
                    type: "GET_FILMS",
                    payload: [],
                });
            }
        }
        if (films.length === 0) {
            runSearchFromParams(params.text);
        }
    }, [dispatch, films, params.text, noSearchFound]);


    if (!isLoading && films.length !== 0 && noSearchFound) {
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
    } else if (!noSearchFound) {
        return (
           <FilmNoResults/>
        )
    } else if (isLoading) {
        return (
            <LargeSpinner/>
        )
    }
};

export default SearchResults;