import Cell from "./Cell";

function Grid({ mark, endTurn }) {
  var cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function addPlayerMove(num) {
    if (turn == 1) {
      let newMoves1 = [...player1Moves, num];
      setPlayer1Moves(newMoves1);
    } else {
      let newMoves2 = [...player2Moves, num];
      setPlayer2Moves(newMoves2);
    }
  }
  return (
    <div className="game__grid">
      {cells.map(function renderCell(num) {
        return (
          <Cell
            key={`cell-${num}`}
            num={num}
            mark={mark}
            endTurn={endTurn}
            addPlayerMove={addPlayerMove}
          ></Cell>
        );
      })}
    </div>
  );
}

export default Grid;
