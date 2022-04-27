import "./style.css"
import { useEffect, useState } from "react";
function PopUp({ closeFunction }) {

  useEffect(() => {
    setTimeout(closeFunction, 5000);
  },
    [])

  return (
    <div className="PopUp">
      <div className="popUpBox">
        <button onClick={closeFunction}>x</button>
        <h1>Caricamento completato!</h1>
        <p>Complimenti hai inserito correttamente un film al database!!!</p>
        <p>Aspetta 5 secondi per tornare alla pagina di inserimento o premi la "x"!</p>
      </div>
    </div>
  );
}

export default PopUp;