import React from "react";
import "./App.scss";
import Fog from "./components/Fog/Fog";

function App() {
  return (
    <>
      <Fog></Fog>
      <div className="App">
        <p className="AppTitle">Happy Kellyween!</p>
        <p className="AppDescription">
          <span className="Italic">Spooky season</span> podrá haber terminado,
          pero las sorpresas seguirán llegando.
        </p>
      </div>
    </>
  );
}

export default App;
