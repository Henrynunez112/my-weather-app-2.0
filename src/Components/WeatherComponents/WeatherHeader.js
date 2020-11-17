import React from "react";
import './WeatherHeader.css'
// import moment from "moment";

const WeatherHeader = ({current, currentWeatherImg}) => {
  return (
  <div className="weatherHeader col-4 justify-content-start align-content-start">
    <div className="weatherToday justify-content-center align-content-center">
      <img
        className="headImg"
        alt=""
        src={`http://openweathermap.org/img/wn/${currentWeatherImg.icon}@2x.png`}
      />
      <p>{currentWeatherImg.description}</p>

      </div>
  <div className="weatherBodyHeader justify-content-center align-content-center">
    <p>Current Temp: {current.temp} °F</p>
    <p>Feels like: {current.feels_like}°F</p>
    <p></p>
   </div>
  </div>
  );
};
export default WeatherHeader;
