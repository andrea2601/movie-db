import "./style.css";

function CardItem({ cardData }) {
  return (
    <div className="CardItem">
      <a href="#">
        <h2>{cardData.title}</h2>
      </a>
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