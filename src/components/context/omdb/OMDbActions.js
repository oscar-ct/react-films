
const OMDB_TOKEN = process.env.REACT_APP_OMDB_TOKEN



export const filmSearch = async (text) => {
    const params = new URLSearchParams({
        apikey: OMDB_TOKEN,
        s: text,
    });
    console.log("a search fetch was made")
    const response = await fetch(`https://omdbapi.com/?${params}`);
    const data = await response.json();
    return data;
}

export const filmData = async (text) => {
    const params = new URLSearchParams({
        apikey: OMDB_TOKEN,
        i: text,
        plot: "full",
    });
    console.log("a title fetch was made")
    const response = await fetch(`https://omdbapi.com/?${params}`);
    const data = await response.json();
    return data;
}

export const filterSearchData = (array) => {
    return array.filter(function (obj) {
        return obj.Poster !== "N/A";
    });
}


