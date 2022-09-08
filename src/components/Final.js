import iconO from "/src/assets/icon-o.svg";
import iconX from "/src/assets/icon-x.svg";

function Final() {
  return (
    <div className="final">
	  <div className="final__container">
      <h3 className="final__result">Oh no, you lost!</h3>
      <div className="final__mark">
        <img className="final__logo" src={iconO} />
        <h2 className="final__winner">Takes the round</h2>
      </div>
      <div className="final__controls">
        <button className="final__quit">Quit</button>
        <button className="final__next">Next round</button>
      </div>
	  </div>
	  <div className="final__bg">
	  </div>
    </div>
  );
}

export default Final;
