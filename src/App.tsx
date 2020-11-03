import React from "react";
import "./App.scss";
import DancingSkeleton from "./components/DancingSkeleton/DancingSkeleton";
import Fog from "./components/Fog/Fog";

function App() {
  return (
    <>
      <Fog></Fog>
      <div className="App">{/* <DancingSkeleton></DancingSkeleton> */}</div>
    </>
  );
}

export default App;
