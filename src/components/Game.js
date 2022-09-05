import iconO from "../assets/icon-o.svg";
import iconX from "../assets/icon-x.svg";
import Cell from "./Game/Cell.js";
import Grid from "./Game/Grid.js";
import Header from "./Game/Header.js";
import Score from "./Game/Score.js";

function Game({ setGame, turn }) {
  return (
    <div className="game">
      <Header setGame={setGame} turn={turn} />
      <Grid turn={turn} />
      <Score />
    </div>
  );
}

export default Game;
