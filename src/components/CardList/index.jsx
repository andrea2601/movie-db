import { useState, useEffect } from "react";
import CardItem from "../CardItem";
import "./style.css";
import { getFilmAPI, postFilmAPI, deleteFilmAPI, putFilmAPI } from "../../utils";

function CardList() {
  const [moviesData, setMoviesData] = useState([]);
  const url = "https://edgemony-backend.herokuapp.com/movies";
  useEffect(() => {
    getFilmAPI(url).then((data) => setMoviesData(data));
  }, []);

  return (
    <div className="CardList">
      <h1>Lista dei film</h1>
      <div className="CardList__wrapper">
        {moviesData &&
          moviesData.map((movie) => (
            <CardItem cardData={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default CardList;