import { useState, useEffect } from "react";
import CreateCardForm from "./../../components/CreateCardForm";
import PopUp from "./../../components/PopUp";
import styles from "./style.module.scss";

function AddMovie() {
  const [isModalVisibile, setModalVisibility] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalVisibility(false);
    }, 5000);
  }, [isModalVisibile]);

  const closeFunction = () => {
    setModalVisibility(false);
  }

  return (
    <div className={styles.AddMovie}>
      <h1>Add a new movie</h1>
      <CreateCardForm setModalVisibility={setModalVisibility} callType="POST" />
      <PopUp
        text="Un nuovo film è stato aggiunto alla lista!"
        isVisibile={isModalVisibile}
        closeFunction={closeFunction}
        color="green"
      />
    </div>
  );
}

export default AddMovie;