import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import OMDbContext from "../context/omdb/OMDbContext";
import {filmSearch} from "../context/omdb/OMDbActions";
import {AnimatePresence, motion} from "framer-motion";
import FilmItem from "../omdb-films/FilmItem";
import LargeSpinner from "../layout/LargeSpinner";
import { useNavigate } from "react-router-dom";

const SearchResults = () => {

    // const [noSearchFound, setNoSearchFound] = useState(true);

    const { isLoading, films, dispatch, noSearchFound, } = useContext(OMDbContext);
    const params = useParams();
    const navigate = useNavigate();


    useEffect(function (){
        const runSearchFromParams = async (text) => {
            dispatch({
                type: "SET_LOADING",
                payload: true,
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
                    payload: true,
                });
            } else {
                dispatch({
                    type: "SET_SEARCH_FOUND",
                    payload: false,
                });
                dispatch({
                    type: "SET_LOADING",
                    payload: false,
                })
                navigate(`/failed/${params.text}`)
            }
        }
        if (films.length === 0) {
            runSearchFromParams(params.text);
        }
    }, [dispatch, films.length, navigate, params.text]);



    if ((!isLoading || noSearchFound) && films.length !== 0) {
        return (
            <div>
                <div className="py-6">
                    <div className="text-2xl text-white text-center">Displaying<span className={"mx-2 font-bold"}>{films.length}</span>results for<span className="font-bold ml-2 italic">"{params.text}"</span></div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <AnimatePresence>
                    {films.map(function(film) {
                        return (
                            <motion.div key={film.imdbID} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                                <FilmItem film={film} key={film.imdbID}/>
                            </motion.div>
                        )
                    })}
                    </AnimatePresence>
                </div>
            </div>
        );
    } else if (isLoading) {
        return (
            <LargeSpinner/>
        )
    }
};

export default SearchResults;