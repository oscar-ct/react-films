
const OMDB_TOKEN = process.env.REACT_APP_OMDB_TOKEN


export const filmSearch = async (text) => {
    const params = new URLSearchParams({
        apikey: OMDB_TOKEN,
        s: text,
    });
    const response = await fetch(`https://omdbapi.com/?${params}`);
    const data = await response.json();
    console.log(data);
    return data;
}

