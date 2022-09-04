import { useState } from "react";
import iconO from "/src/assets/icon-o.svg";
import iconX from "/src/assets/icon-x.svg";

function Cell() {
  var [state, setState] = useState("");
  return (
    <button onClick={() => setState(iconO)} className="game__grid-cell">
      <img src={state} alt="" />
    </button>
  );
}

export default Cell;
