import "./style.css"
function PopUp({ closeFunction, isVisibile, text, color }) {

  return (<>
    {isVisibile && (
    <div className="PopUp">
      <div className={`popUpBox ${color}`}>
        <button onClick={closeFunction}>x</button>
        <h1>{text}</h1>
        <p>Aspetta 5 secondi per tornare alla pagina di inserimento o premi la "x"!</p>
      </div>
    </div>
      )}
    </>
  );
}

export default PopUp;