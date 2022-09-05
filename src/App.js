import { useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import "./scss/style.scss";

function App() {
  var [game, setGame] = useState(false);
  var [turn, setTurn] = useState("o");

  function toggleTurn() {
    if (turn == "x") {
      setTurn("o");
    } else {
      setTurn("x");
    }
  }
  return (
    <main>
      {game ? (
        <Game setGame={setGame} turn={turn} toggleTurn={toggleTurn} />
      ) : (
        <Menu turn={turn} setTurn={setTurn} setGame={setGame} />
      )}
    </main>
  );
}

export default App;
