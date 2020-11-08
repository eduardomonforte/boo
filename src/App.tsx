import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Fog from "./components/Fog/Fog";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Kellify from "./views/Kellify/Kellify";

function App() {
  return (
    <>
      <Fog></Fog>
      <Router>
        <Switch>
          <Route exact path="/kellify">
            <Kellify />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
