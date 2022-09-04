function Score() {
  return (
    <div className="game__score">
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
    </div>
  );
}

export default Score;
