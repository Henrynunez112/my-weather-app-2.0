import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Weather from "./Components/WeatherComponents/Weather";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer.js";
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from './Components/DarkTheme/Theme';
import { GlobalStyle} from './Components/DarkTheme/DarkTheme';
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
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
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
