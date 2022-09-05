import Cell from "./Cell";

function Grid({ turn, toggleTurn }) {
  var cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="game__grid">
      {cells.map(function renderCell(num) {
        return (
          <Cell key={`cell-${num}`} turn={turn} toggleTurn={toggleTurn}></Cell>
        );
      })}
    </div>
  );
}

export default Grid;
