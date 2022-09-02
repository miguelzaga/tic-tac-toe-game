import logo from "../assets/logo.svg";
import iconRestart from "../assets/icon-restart.svg";
import iconO from "../assets/icon-o.svg";
import iconX from "../assets/icon-x.svg";
import Cell from "./GameboardCell.js";

var iconXSmall = (
  <svg
    viewBox="-3 0 70 60"
    width="64"
    height="64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
      fillRule="evenodd"
    />
  </svg>
);

function Gameboard() {
  return (
    <div className="game">
      <header className="game__header">
        <img src={logo} alt="" className="game__logo" />
        <div className="game__turn">
          <div className="game__turn-icon">{iconXSmall}</div>
          <h1 className="game__turn-title">Turn</h1>
        </div>
        <button className="game__restart">
          <img src={iconRestart} alt="" className="game__restart-logo" />
        </button>
      </header>
      <main className="game__grid">
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
      </main>
      <footer className="game__score">
        <div className="game__score-cell game__score-cell--1">
          <h2 className="game__score-name">X (You)</h2>
          <p className="game__score-num">14</p>
        </div>
        <div className="game__score-cell game__score-cell--2">
          <h2 className="game__score-name">Ties</h2>
          <p className="game__score-num">32</p>
        </div>
        <div className="game__score-cell game__score-cell--3">
          <h2 className="game__score-name">O (Cpu)</h2>
          <p className="game__score-num">11</p>
        </div>
      </footer>
    </div>
  );

  {
    /* 

  <!-- Game board start -->

  <!-- x/o icon --> turn

  X (You) <!-- Your score -->
  Ties <!-- Ties score -->
  X (CPU) <!-- CPU score -->

  Oh no, you lost
  You won!
  Player <!-- 1/2 --> wins!

  <!-- x/o icon --> takes the round
  Round tied
  Restart game?

  Quit
  Next round
  No, cancel
  Yes, restart

  <!-- Game board end --> */
  }
}

export default Gameboard;
