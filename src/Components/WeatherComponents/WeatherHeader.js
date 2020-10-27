import React from "react";


const WeatherHeader = ({ weather, currentWeather }) => {

debugger
  return (
    <div>
      <img className="headImg" alt="current Temp" src={`https://www.weatherbit.io/static/img/icons/${currentWeather.icon}.png`} />
      <p>{currentWeather.description}</p>
      <p>{weather.timezone}</p>
      <p>{weather.city_name}</p>
      <p>{weather.state_code}</p>
    </div>
  );
};
export default WeatherHeader;
