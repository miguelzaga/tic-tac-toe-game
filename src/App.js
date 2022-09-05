import { useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import "./scss/style.scss";

function App() {
  var [game, setGame] = useState(false);
  var [mark, setMark] = useState("x");

  function toggleMark() {
    if (mark == "x") {
      setMark("o");
    } else {
      setMark("x");
    }
  }

  return (
    <main>
      {game ? (
        <Game setGame={setGame} mark={mark} toggleMark={toggleMark} />
      ) : (
        <Menu mark={mark} setMark={setMark} setGame={setGame} />
      )}
    </main>
  );
}

export default App;
