import CardList from "../../components/CardList";
import "./style.css";
import {useState} from "react";

function Home() {
  
const [searchValue, setSearchValue] = useState("");


const changing = (event) => {
  setSearchValue(event.target.value);
};

  return (
    <div className="Home">
     <div className="search">
      <label htmlFor="search">Search by title or categories:</label>
      <input type="text" id="search" name="search" value={searchValue} onChange={changing}/>
</div>
      <CardList filter={searchValue}/>
    </div>
  );
}

export default Home;