import { useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import "./scss/style.scss";

function App() {
  var [game, setGame] = useState(true);
  return <main>{game ? <Game /> : <Menu />}</main>;
}

export default App;
