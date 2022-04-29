import styles from "./style.module.scss";
import CardList from "../../components/CardList"
import { useState } from "react"
function CategoriesPage() {
  
  const [categories, setCategories] = useState([]);
  const [isActive, setActive] = useState([]);
  
  const changeCategory = (event) => {
  setCategories([...categories, event.target.value]);
  console.log("category:", categories);
  setActive([...isActive, event.target.value]);
};



  return (
  <div className="CatPage">
    <h2>Selezione una categoria</h2>
    <button className={`${styles.category_btn} ${isActive.toString().includes("Comico") && styles.active}`} value="Comico" onClick={changeCategory}>Comico</button>
    <button className={`${styles.category_btn} ${isActive.toString().includes("Avventura") && styles.active}`} value="Avventura" onClick={changeCategory}>Avventura</button>
    <button className={`${styles.category_btn} ${isActive.toString().includes("Magia") && styles.active}`} value="Magia" onClick={changeCategory}>Magia</button>
    <button className={`${styles.category_btn} ${isActive.toString().includes("Sci-fi") && styles.active}`} value="Sci-fi" onClick={changeCategory}>Sci-fi</button>
    <CardList filter={categories.toString()}/>
  </div>
  );
}

export default CategoriesPage;