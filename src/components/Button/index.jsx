import { useState } from "react";
import "./style.css";

function Button({ value }) {
  const [pippo, setPippo] = useState("🦁");

  return (
    <>
      <p>Ciao Ciao</p>
      <button>{value + pippo}</button>
      {/* {true ? console.log(pippo) : console.log("pluto")} */}
    </>
  );
}

export default Button;