import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GET } from "../../utils";

import PopUp from "./../../components/PopUp";
import CardItem from "../../components/CardItem";
import CreateCardForm from "../../components/CreateCardForm";
import styles from "./style.module.scss";

function EditMovie() {
  const location = useLocation();
  const [movieData, setMovieData] = useState({});
  const movieId = location.pathname.split("/").reverse()[0];

  const [isModalVisibile, setModalVisibility] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalVisibility(false);
    }, 5000);
  }, [isModalVisibile]);

  useEffect(() => {
    GET(movieId).then((data) => setMovieData(data));
  }, [isModalVisibile]);

  const closeFunction = () => {
    setModalVisibility(false);
  }

  return (
    <div className={styles.EditMovie}>
      <CardItem cardData={movieData} changeClass="editMovie"/>
      <CreateCardForm setModalVisibility={setModalVisibility} callType="PUT" h2Title="Edit movie" cardData={movieData}/>
      <PopUp
        text="Il film è stato Modificato!"
        isVisibile={isModalVisibile}
        closeFunction={closeFunction}
        color="orange"
      />
    </div>
  );
}

export default EditMovie;