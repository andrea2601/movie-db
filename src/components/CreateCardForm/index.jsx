import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { POST, PUT, GET } from "../../utils";
import "./style.css";

function CreateCardForm({ callType, h2Title = "Create a new movie card", cardData, setModalVisibility }) {

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [genres, setGenres] = useState([]);
  const [description, setDescription] = useState("");

  // console.log("gen", genres.join());

  useEffect(() => {
    if (cardData) {
      setTitle(cardData.title);
      setYear(cardData.year);
      setPoster(cardData.poster);
      setGenres(cardData.genres);
      console.log("gen", genres);
      setDescription(cardData.description);
    }

  }, [cardData]);

  const location = useLocation();
  const movieId = location.pathname.split("/").reverse()[0];

  const unStringifyGenres = (genres) => {
    if (typeof genres === 'string') {
      return genres.split(",");
    } else { return genres }
  }

  const addNewMovie = (e) => {
    e.preventDefault();

    if (callType === "POST") {
      POST({
        title,
        year,
        poster,
        genres: unStringifyGenres(genres),
        description,
      });
    } else {
      console.log("genre:...", genres);
      PUT(movieId, {
        title,
        year,
        poster,
        genres: unStringifyGenres(genres),
        description,
      });
    }
    setModalVisibility(true);
    setTitle("");
    setYear("");
    setPoster("");
    setGenres("");
    setDescription("");


  };


  return (
    <div className="CreateCardForm">
      <h2>{h2Title}</h2>

      <form onSubmit={addNewMovie} className="CreateCardForm__form">
        <label htmlFor="title">Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          name="title"
          required
        />

        <label htmlFor="year">Year:</label>
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="text"
          id="year"
          name="year"
          required
        />

        <label htmlFor="poster">Poster:</label>
        <input
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          type="text"
          id="poster"
          name="poster"
          required
        />

        <label htmlFor="genres">Genres:</label>
        <input
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          type="text"
          id="genres"
          name="genres"
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          id="description"
          name="description"
          required
        />

        <input type="submit" value="Send it!" className="button" />
      </form>
    </div>
  );
}

export default CreateCardForm;