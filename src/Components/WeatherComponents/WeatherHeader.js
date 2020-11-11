import React from "react";
import moment from "moment";

const WeatherHeader = ({current, currentWeatherImg}) => {
  console.log(currentWeatherImg)
  debugger

  return (
  <div className="weatherBody">
    <div className="weatherToday">
      <img
        className="headImg"
        alt=""
        src={`http://openweathermap.org/img/wn/${currentWeatherImg.icon}@2x.png`}
      />
      <p>{currentWeatherImg.description}</p>

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
