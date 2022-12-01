import "./App.css";
import grassImg from "./img/grass.png";

function App() {
  return (
    <>
      <div className="div1 position-absolute">
        <div className="div6 position-absolute"></div>
        <div className="div7 position-absolute"></div>
      </div>

      <div className="div2 position-absolute"></div>
      <div className="div3 position-absolute"></div>
      <div className="div4 position-absolute"></div>
      <div className="div5 position-absolute"></div>

      <img src={grassImg} className="grass position-absolute" />
    </>
  );
}

export default App;
