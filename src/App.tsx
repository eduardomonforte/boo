import React from "react";
import "./App.css";
import DancingSkeleton from "./components/DancingSkeleton/DancingSkeleton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DancingSkeleton></DancingSkeleton>
      </header>
    </div>
  );
}

export default App;
