import CardList from "../../components/CardList";
import "./style.css";
import {useState, useEffect} from "react";
import PopUp from "./../../components/PopUp";

function Home() {
  
const [searchValue, setSearchValue] = useState("");

const [isModalVisibile, setModalVisibility] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalVisibility(false);
    }, 5000);
  }, [isModalVisibile]);

const changing = (event) => {
  setSearchValue(event.target.value);
};
const closeFunction = () => {
  setModalVisibility(false);
}
  return (
    <div className="Home">
     <div className="search">
      <label htmlFor="search">Search by title or categories:</label>
      <input type="text" id="search" name="search" value={searchValue} onChange={changing}/>
</div>
      <CardList filter={searchValue} setModalVisibility={setModalVisibility}/>
      <PopUp
        text="Il film è stato Eliminato!"
        isVisibile={isModalVisibile}
        closeFunction={closeFunction}
        color="red"
      />
    </div>
  );
}

export default Home;