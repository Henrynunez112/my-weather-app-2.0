import React from "react";
import moment from "moment";

const WeatherHeader = ({current}) => {
  debugger

  return (
  <div className="weatherBody">
    <div className="weatherToday">
      {/* <h1>Today: {moment().format()}</h1> */}
      </div>
  <div className="weatherBodyHeader">
    <p>{current.temp} °F</p>

    <p></p>
   </div>
  </div>
  );
};
export default WeatherHeader;
