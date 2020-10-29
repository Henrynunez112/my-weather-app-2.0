import React from "react";
import "../Home/Home.css";

const Home = () => {
  return (
    <div className="homeContainer container">
      <div className="row justify-content-center">
        <div className="homeHeader col-10 col-md-8 col-lg-6">
          <h1>Hello World!</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="homebodyContainer col-8 col-md-6 col-lg-4">
          <p className="text-left">
            Welcome to my Widget App this is an application that allows you (the user) to view the current
            time, and weather in your current location. You can navigate
            between the weather and the time by using the navigation bar.
            Also don't forget to try the Dark Mode feature!

          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
