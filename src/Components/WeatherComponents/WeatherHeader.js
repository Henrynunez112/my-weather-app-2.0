import React from "react";
import './WeatherHeader.css'
// import moment from "moment";

const WeatherHeader = ({current, currentWeatherImg}) => {
  return (
  <div className="weatherHeader col">
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
