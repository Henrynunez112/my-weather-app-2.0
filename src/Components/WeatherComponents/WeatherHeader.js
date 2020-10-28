import React from "react";
import moment from "moment";

const WeatherHeader = ({ weather, today, weatherImg }) => {

  return (
    <div className="weatherBody">
      <div className="weatherToday">
  <h1>Today: {moment().format('MMMM Do YYYY')}</h1>
      </div>
    <div className="weatherBodyHeader">
      <h2>{weather.city_name}, {weather.state_code}</h2>
      <h4>{weather.country_code}</h4>
      <img className="headImg" alt="current Temp" src={`https://www.weatherbit.io/static/img/icons/${weatherImg.icon}.png`} />
      <p>{weatherImg.description}</p>
      <p>High: {today.high_temp} °F</p>
      <p>Low: {today.low_temp} °F</p>
    </div>
    </div>
  );
};
export default WeatherHeader;
