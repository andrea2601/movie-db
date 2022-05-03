import "./styles.css";
import { DELETE } from "../../utils";
import { Link } from "react-router-dom";
import { useState } from "react"

function CardItem({ cardData, onForceRender, value, setModalVisibility, changeClass }) {

  const [booleanValue, setBoolean] = useState(true);

  const onCardDelete = () => {
    DELETE(cardData.id).then((data) => onForceRender(!value));
    setModalVisibility(true);
  };

  // useEffect(() => {
  //   setBoolean(!booleanValue);
  // }, [booleanValue]);

  return (
    <div className={`CardItem ${changeClass ? changeClass : ""}`}>
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