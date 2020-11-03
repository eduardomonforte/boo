import React from "react";
import "./App.scss";
import Fog from "./components/Fog/Fog";
import DancingSkeleton from "./components/DancingSkeleton/DancingSkeleton";

function App() {
  return (
    <>
      <Fog></Fog>
      <div className="App">
        <p className="AppTitle">Happy Kellyween!</p>
        <p className="AppDescription">
          Gracias por hacer de estos últimos meses los mejores de la cuarentena.
        </p>
        <p className="AppDescription">
          <span className="Italic">Spooky season</span> podrá haber terminado,
          pero las sorpresas apenas están empezando. 👻
        </p>
        {/* <div className="IframeContainer">
          <iframe
            title="spotify"
            src="https://open.spotify.com/embed/playlist/1ncjMjObE9sv0K5PocNLWe"
            frameBorder="0"
            allowTransparency={true}
            width="300"
            height="380"
            allow="encrypted-media"
          ></iframe>
        </div> */}
        <p className="AppDescription">
          <span className="Italic">
            Visita esta página mañana temprano para la siguiente sorpresa.
          </span>{" "}
          🌚
        </p>
        <DancingSkeleton></DancingSkeleton>
      </div>
    </>
  );
}

export default App;
