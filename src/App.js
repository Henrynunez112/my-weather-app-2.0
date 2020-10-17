import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Weather from "./Components/Weather";
import Home from "./Components/Home/Home";
import "./App.css";

function App() {
  return <div className="App">
    <Home />

    {/* <Weather /> */}
  </div>;
}

export default App;
