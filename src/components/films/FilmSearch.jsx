import { filmSearch } from "../context/OMDbActions";
import {useEffect, useState} from "react";


const FilmSearch = () => {

    const {text, setText} = useState();
    const fetchFilms =  filmSearch("tron")

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return (
        <div className="grid grid-cols-1 xl:grids-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input
                                className="w-full pr-40 bg-gray-500 input input-lg text-white"
                                placeholder="Search"
                                value={text}
                                onChange={handleChange}
                            />
                            <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                Go
                            </button>
                        </div>
                    </div>

                </form>
            </div>
            {/* CLEAR button */}

        </div>
    );
};

export default FilmSearch;