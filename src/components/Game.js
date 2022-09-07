import { useState } from "react";
import Grid from "./Game/Grid.js";
import Header from "./Game/Header.js";
import Score from "./Game/Score.js";

function Game({ setGame, mark, turn, endTurn, restart }) {
  var [player1Moves, setPlayer1Moves] = useState([]);
  var [player2Moves, setPlayer2Moves] = useState([]);

  function didPlayerWin(moves) {
    var setOfWinnerMoves = [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
    ];
    return setOfWinnerMoves.some(function doMovesMatchWinnerMoves(winnerMoves) {
      return winnerMoves.every(function isWinnerMoveInMoves(winnerMove) {
        return moves.includes(winnerMove);
      });
    });
  }

  return (
    <div className="game">
      <Header setGame={setGame} mark={mark} restart={restart} />
      <Grid mark={mark} endTurn={endTurn} addPlayerMove={addPlayerMove} />
      <Score />
    </div>
  );
}

export default Game;
