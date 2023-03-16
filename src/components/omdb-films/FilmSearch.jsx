import {useContext, useState} from "react";
import OMDbContext from "../context/omdb/OMDbContext";
import {filmSearch} from "../context/omdb/OMDbActions";
import { useNavigate } from "react-router-dom";


const FilmSearch = () => {

    const [text, setText] = useState("");
    const { dispatch } = useContext(OMDbContext);

    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/search/${text}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({
            type: "SET_LOADING"
        });
        const data = await filmSearch(text);
        dispatch({
            type: "GET_FILMS",
            payload: data.Search,
        });
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-row">
            <div>
                <input
                    type="text"
                    placeholder="Search Titles"
                    className="input input-bordered rounded border-0 w-75 text-white bg-gradient-to-r from-black to-neutral text-md"
                    value={text}
                    onChange={handleChange}
                />
            </div>
            {/*<Link className="text-base-content text-opacity-40" to={`/search/${text}`}>*/}
                <button onClick={() => {
                    onClick();
                }} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            {/*</Link>*/}
        </form>


    );
};

export default FilmSearch;