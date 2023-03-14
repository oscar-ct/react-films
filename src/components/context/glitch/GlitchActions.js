
const GLITCH_URL = process.env.REACT_APP_GLITCH_URL


export const getGlitchFilms = async () => {
    const response = await fetch(GLITCH_URL);
    const data = await response.json();
    console.log(data);
    return data;
}
