import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Weather from "./Components/WeatherComponents/Weather";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer.js";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Components/DarkTheme/Theme';
import { GlobalStyle } from './Components/DarkTheme/GlobalStyle';
import "./App.css";

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="App">
        <NavBar theme={theme} />
        <button onClick={toggleTheme}>Click Here</button>
        <Switch>
          <Route exact path="/">
            <Home theme={theme} />
          </Route>
          <Route exact path="/weather">
            <Weather />
          </Route>
        </Switch>
        <Footer theme={theme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
