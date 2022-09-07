import { useState } from "react";
import iconO from "/src/assets/icon-o.svg";
import iconX from "/src/assets/icon-x.svg";

function Cell({ mark, endTurn, num, addPlayerMove }) {
  var [icon, setIcon] = useState("");

  function takeTurn() {
    if (!icon) {
      addPlayerMove(num);
      selectIcon();
      endTurn();
    }
  }

  function selectIcon() {
    if (mark == "x") {
      setIcon(iconX);
    } else {
      setIcon(iconO);
    }
  }

  return (
    <button onClick={takeTurn} className="game__grid-cell">
      <img src={icon} alt="" />
    </button>
  );
}

export default Cell;
