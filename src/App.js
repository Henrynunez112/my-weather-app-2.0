import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Weather from "./Components/WeatherComponents/Weather";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/weather">
          <Weather />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
