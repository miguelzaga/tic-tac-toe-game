import { useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import "./scss/style.scss";

function App() {
  var [game, setGame] = useState(false);
	var [turn, setTurn] = useState("o");
  return <main>{game ? <Game setGame={setGame} turn={turn} /> : <Menu turn={turn} setTurn={setTurn} setGame={setGame}/>}</main>;
}

export default App;
