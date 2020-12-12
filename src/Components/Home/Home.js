import React from "react";
import "../Home/Home.css";

const Home = ({ theme }) => {
  const darkJumbotron = {
    border: '2px solid #7DFDFE',
    backgroundColor: '#363537',
    transition: 'all 0.25s linear'
  }
  const darkHeaderBorder = {
    padding: "20px",
    borderBottom: "2px solid #7DFDFE",
    boxShadow: "0 4px 2px -2px gray",
    marginBottom: "20px",
    transition: 'all 0.30s linear'
  }
  return (
    <div className="homeContainer container">
      <div className="jumbotron homeJumbotron" style={theme === 'dark' ? darkJumbotron : null}>
        <div className="row justify-content-center homeHeaderRow">
          <div className="homeHeader col-10 col-md-auto" style={theme === 'dark' ? darkHeaderBorder : null}>
            <h1>Hello World!</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="homebodyContainer col-8 col-md-6" style={theme === 'dark' ? darkJumbotron : null}>
            <p className="text-left">
              Welcome to my Widget App this is an application that allows you (the user) to view the current
              time, and weather in your current location. You can navigate
              between the weather and the time by using the navigation bar.
              Also don't forget to try the Dark Mode feature!

          </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
