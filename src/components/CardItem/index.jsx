import "./style.css";
import { Link } from "react-router-dom";

function CardItem({ cardData }) {
  return (
    <div className="CardItem">
      <Link to={`/edit-movie/${cardData.id}`}>
        <h2>{cardData.title}</h2>
      </Link>
      <p>{cardData.year}</p>
      <img src={cardData.poster} alt={cardData.title} />
      <p>{cardData.description}</p>
      <div className="genre">
        <ul>
          {cardData.genres &&
            cardData.genres.map((genre, i) => <li key={i}>{genre}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default CardItem;