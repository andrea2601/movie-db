import { GET } from "../../utils";
import { useState, useEffect } from "react";
import CardItem from "../CardItem";
import "./style.css";

function CardList({ filter, setModalVisibility }) {
  const [moviesData, setMoviesData] = useState([]);
  const [moviesDataFiltered, setMoviesDataFiltered] = useState([]);
  const [value, setValue] = useState(true);
  
  useEffect(() => {
    GET().then((data) => {
      setMoviesData(data);
      setMoviesDataFiltered(data);
    });
  }, [value]);


  useEffect(() => {

    const filtered = moviesDataFiltered.filter((item) => {

      console.log(item.title.includes(filter));
      console.log("genres", item.genres.toString().toLowerCase());
      
      return item.genres.toString().toLowerCase().includes(filter.toLowerCase()) || item.title.toLowerCase().includes(filter.toLowerCase());
    });
    setMoviesData(filtered);
    console.log("il filtered è: ", filtered);
    console.log("il filtro è: ", filter);


    // eslint-disable-next-line
  }, [filter]);

  return (
    <div className="CardList">
      <h1>Lista dei film</h1>
      <div className="CardList__wrapper">
        {moviesData &&
          moviesData.map((movie) => (
            <CardItem cardData={movie} key={movie.id} onForceRender={setValue} value={value} setModalVisibility={setModalVisibility}/>
          ))}
      </div>
    </div>
  );
}

export default CardList;