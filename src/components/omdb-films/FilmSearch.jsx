import {useContext} from "react";
import OMDbContext from "../context/omdb/OMDbContext";
import {filmSearch} from "../context/omdb/OMDbActions";
import { useNavigate } from "react-router-dom";


const FilmSearch = () => {

    const { dispatch, searchString } = useContext(OMDbContext);
    const navigate = useNavigate();

    const navigateToSearchPage = () => {
        navigate(`/search/${searchString}`)
    }
    const navigateToSearchable = () => {
        navigate(`/failed/${searchString}`)
    }

    const handleChange = (e) => {
        dispatch({
            type: "SET_SEARCH_STRING",
            payload: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (searchString.trim() === "") {
            console.log("THIS IS BLANK")
            dispatch({
                type: "SET_ALERTING",
                payload: true
            });
            setTimeout(function () {
                dispatch({
                    type: "SET_ALERTING",
                    payload: false
                });
            }, 2000);
        } else {

            dispatch({
                type: "SET_LOADING",
                payload: true
            });
            const data = await filmSearch(searchString)
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
                navigateToSearchPage();
            } else {
                dispatch({
                    type: "SET_SEARCH_FOUND",
                    payload: false
                });
                dispatch({
                    type: "SET_LOADING",
                    payload: false,
                })
                navigateToSearchable()
            }
        }
    }


    return (
        <form onSubmit={handleSubmit} className="flex flex-row">
            <div>
                <input
                    type="text"
                    placeholder="Search Titles"
                    className="input input-bordered rounded border-0 w-75 text-white bg-gradient-to-r from-black to-neutral text-md"
                    onChange={handleChange}
                    value={searchString}
                />
            </div>
            {/*<Link className="text-base-content text-opacity-40" to={`/search/${text}`}>*/}
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            {/*</Link>*/}
        </form>
    );
};

export default FilmSearch;