import { useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import "./scss/style.scss";

function App() {
  var [game, setGame] = useState(true);
  function goMenu() {
    setGame(false);
  }
  return <main>{game ? <Game goMenu={goMenu} /> : <Menu />}</main>;
}

export default App;
