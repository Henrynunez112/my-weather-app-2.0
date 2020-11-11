import React from "react";
import moment from "moment";

const WeatherHeader = ({current}) => {
  debugger

  return (
  <div className="weatherBody">
    <div className="weatherToday">
      </div>
  <div className="weatherBodyHeader">
    <p>Current Temp: {current.temp} °F</p>
    <p>Feels like: {current.feels_like}°F</p>
    <p></p>
   </div>
  </div>
  );
};
export default WeatherHeader;
