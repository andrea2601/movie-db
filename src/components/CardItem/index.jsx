import "./styles.css";
import { DELETE } from "../../utils";
import { Link } from "react-router-dom";

function CardItem({ cardData, onForceRender, setModalVisibility }) {

  const onCardDelete = () => {
    DELETE(cardData.id).then((data) => onForceRender("/"));
    setModalVisibility(true);
  };

  return (
    <div className="CardItem">
      <Link to={`/edit-movie/${cardData.id}`}>
        <h2>{cardData.title}</h2>
      </Link>
      <button onClick={onCardDelete} className="Card__btn">
        x
      </button>
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