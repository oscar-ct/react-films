import {filmData} from "../omdb/OMDbActions";

const GLITCH_URL = process.env.REACT_APP_GLITCH_URL


export const getGlitchFilms = async () => {
    const response = await fetch(GLITCH_URL);
    const data = await response.json();
    return data.reverse();
}

export const updateGlitchFilm = async (id, updItem) => {
    const response = await fetch(`${GLITCH_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updItem),
        headers: {
            "Content-Type": "application/json"
        },
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export const deleteGlitchFilm = async (id) => {
    await fetch(`${GLITCH_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });
}

export const addGlitchFilm = async (id, Favorite, WatchList) => {
    const data = await filmData(id);
    const { Title, Poster, Year, Genre, Director, Plot, Actors, imdbID } = data;
    const new_object = {
        Title,
        Rating: data.Ratings[0].Value,
        Poster,
        Year,
        Genre,
        Director,
        Plot,
        Actors,
        imdbID,
        Favorite: Favorite,
        WatchList: WatchList
    }
    const response = await fetch(`${GLITCH_URL}`, {
        method: "POST",
        body: JSON.stringify(new_object),
        headers: {
            "Content-Type": "application/json"
        },
    });
    const data2 = await response.json();
    return data2;
}