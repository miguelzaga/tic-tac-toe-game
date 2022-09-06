import { useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import "./scss/style.scss";

function App() {
  var [game, setGame] = useState(false);
  var [mark, setMark] = useState("x");
  var [turn, setTurn] = useState(2); // By default the player 2 starts (with X)
	function endTurn(){
		toggleMark();
		toggleTurn();
	}

function toggleTurn(){
    if (turn == 2) {
      setTurn(1);
    } else {
      setTurn(2);
    }
  }

  function toggleMark() {
    if (mark == "x") {
      setMark("o");
    } else {
      setMark("x");
    }
  }

  function restart() {
    setGame(false);
    setMark("x");
  }

  return (
    <main>
      {game ? (
        <Game
          setGame={setGame}
          mark={mark}
          endTurn={endTurn}
          restart={restart}
        />
      ) : (
        <Menu mark={mark} setMark={setMark} setGame={setGame} />
      )}
    </main>
  );
}

export default App;
