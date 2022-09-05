import { useState } from "react";
import iconO from "../assets/icon-o.svg";
import iconX from "../assets/icon-x.svg";
import Cell from "./Game/Cell.js";
import Grid from "./Game/Grid.js";
import Header from "./Game/Header.js";
import Score from "./Game/Score.js";

function Game({ setGame, mark, toggleMark, restart }) {
  [player1Moves, setPlayer1Moves] = useState([]);
  [player2Moves, setPlayer2Moves] = useState([]);

  function addPlayerMove(player, num) {
    if (player == 1) {
      setPlayer1Moves(...player1Moves, num);
    } else {
      setPlayer2Moves(...player2Moves, num);
    }
  }

  return (
    <div className="game">
      <Header setGame={setGame} mark={mark} restart={restart} />
      <Grid mark={mark} toggleMark={toggleMark} />
      <Score />
    </div>
  );
}

export default Game;
