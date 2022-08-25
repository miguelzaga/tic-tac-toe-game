import logo from "../assets/logo.svg";
import iconRestart from "../assets/icon-restart.svg";
import iconO from "../assets/icon-o.svg";
import iconX from "../assets/icon-x.svg";

function Gameboard() {
  return (
    <div className="game">
      <header className="game__header">
        <img src={logo} alt="" className="game__logo" />
        <h1 className="game__turn">Turn</h1>
        <button className="game__restart">
          <img src={iconRestart} alt="" className="game__restart-logo" />
        </button>
      </header>
      <main className="game__grid">
        <button className="game__grid-cell"></button>
        <button className="game__grid-cell">
          <img src={iconX} alt="" />
        </button>
        <button className="game__grid-cell">
          <img src={iconO} alt="" />
        </button>
        <button className="game__grid-cell">
          <img src={iconX} alt="" />
        </button>
        <button className="game__grid-cell">
          <img src={iconO} alt="" />
        </button>
        <button className="game__grid-cell">
          <img src={iconX} alt="" />
        </button>
        <button className="game__grid-cell"></button>
        <button className="game__grid-cell">
          <img src={iconO} alt="" />
        </button>
        <button className="game__grid-cell">
          <img src={iconX} alt="" />
        </button>
      </main>
      <footer className="game__score">
        <div className="game__score-x">
          <h2 className="game__score-name">X (You)</h2>
          <p className="game__score-num">14</p>
        </div>
        <div className="game__score-t">
          <h2 className="game__score-name">Ties</h2>
          <p className="game__score-num">32</p>
        </div>
        <div className="game__score-o">
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
