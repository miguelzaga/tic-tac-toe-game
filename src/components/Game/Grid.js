import Cell from "./Cell";

function Grid({ turn, toggleTurn }) {
  return (
    <div className="game__grid">
      <Cell turn={turn} toggleTurn={toggleTurn}></Cell>
      <Cell turn={turn} toggleTurn={toggleTurn}></Cell>
      <Cell turn={turn} toggleTurn={toggleTurn}></Cell>
      <Cell turn={turn} toggleTurn={toggleTurn}></Cell>
      <Cell turn={turn} toggleTurn={toggleTurn}></Cell>
      <Cell turn={turn} toggleTurn={toggleTurn}></Cell>
      <Cell turn={turn} toggleTurn={toggleTurn}></Cell>
      <Cell turn={turn} toggleTurn={toggleTurn}></Cell>
      <Cell turn={turn} toggleTurn={toggleTurn}></Cell>
    </div>
  );
}

export default Grid;
