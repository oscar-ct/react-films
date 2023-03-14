import {useContext, useState} from "react";
import OMDbContext from "../context/OMDbContext";
import {filmSearch} from "../context/OMDbActions";


const FilmSearch = () => {

    const [text, setText] = useState("");
    const { dispatch } = useContext(OMDbContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({
            type: "SET_LOADING"
        });
        const data = await filmSearch(text);
        setText("");
        dispatch({
            type: "GET_USERS",
            payload: data,
        });

    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="flex">
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered bg-black text-white"
                    value={text}
                    onChange={handleChange}
                />
            </div>
            <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
        </form>


    );
};

export default FilmSearch;