
const GLITCH_URL = process.env.REACT_APP_GLITCH_URL


export const getGlitchFilms = async () => {
    const response = await fetch(GLITCH_URL);
    const data = await response.json();
    // console.log(data);
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

