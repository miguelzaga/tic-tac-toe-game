function Final() {
  return (
    <div className="final">
      <h3 className="final__result">Oh no, you lost!</h3>
      <div className="final__mark">
        <img className="final__logo" src="" />
        <h2 className="final__winner">Takes the round</h2>
      </div>
      <div className="final__controls">
        <button className="final__quit">Quit</button>
        <button className="final__next">Next round</button>
      </div>
    </div>
  );
}

export default Final;
