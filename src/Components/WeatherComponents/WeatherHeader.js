import React from "react";

const WeatherHeader = ({ weather, currentWeather }) => {
  return (
    <div className="weatherBody">
    <div className="weatherHeader">
      <img className="headImg" alt="current Temp" src={`https://www.weatherbit.io/static/img/icons/${currentWeather.icon}.png`} />
      <p>{weather.city_name}</p>
      <p>{weather.state_code}</p>
      <p>{currentWeather.description}</p>
      <span>{weather.app_temp}°F</span>
    </div>
    </div>
  );
};
export default WeatherHeader;
