import { useState } from "react";
import iconO from "../assets/icon-o.svg";
import iconX from "../assets/icon-x.svg";

function Cell() {
  var [state, setState] = useState("");
  return (
    <button onClick={() => setState(iconO)} className="game__grid-cell">
      <img src={state} alt="" />
    </button>
  );
}

export default Cell;
