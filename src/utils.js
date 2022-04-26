// GET
const getFilmAPI = async (url) => {
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await res.json();
};

// POST
const postFilmAPI = async (url, title, description, poster, year, genres) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            description: description,
            poster: poster,
            year: year,
            genres: genres
        })
    });
    return await res.json();
};

// DELETE
const deleteFilmAPI = async (url, id) => {
    const res = await fetch(`${url}${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    return await res.json();
};

// PUT
const putFilmAPI = async (url, title, description, poster, year, genres) => {
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            description: description,
            poster: poster,
            year: year,
            genres: genres
        })
    });
    return await res.json();
};

export {getFilmAPI, postFilmAPI, deleteFilmAPI, putFilmAPI}