import { GET } from "../../utils";
import { useState, useEffect } from "react";
import CardItem from "../CardItem";
import "./style.css";

function CardList({ filter }) {
  const [moviesData, setMoviesData] = useState([]);
  const [moviesDataFiltered, setMoviesDataFiltered] = useState([]);

  useEffect(() => {
    GET().then((data) => {
      setMoviesData(data);
      setMoviesDataFiltered(data);
    });
  }, []);


  useEffect(() => {

    const filtered = moviesDataFiltered.filter((item) => {

      console.log(item.title.includes(filter));
      console.log("genres",item.genres.toString().toLowerCase());
      return item.genres.toString().toLowerCase().includes(filter.toLowerCase()) || item.title.toLowerCase().includes(filter.toLowerCase()); 
    });
    setMoviesData(filtered);
    console.log("il filtro è: ", filter, filtered);

    // eslint-disable-next-line
  }, [filter]);

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