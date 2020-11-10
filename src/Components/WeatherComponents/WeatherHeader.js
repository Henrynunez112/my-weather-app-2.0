import React from "react";
import moment from "moment";

const WeatherHeader = ({ location }) => {
  debugger
  // today, weatherImg
  // let headerObj = weather.location;
  // let currentWEather = 
  return (
  <div className="weatherBody">
    <div className="weatherToday">
      {/* <h1>Today: {moment().format()}</h1> */}
      </div>
  <div className="weatherBodyHeader">
     <h2>{location.name}, {location.region}</h2>
     <h4>{location.country}</h4>
     {/* <img className="headImg" alt="current Temp" src={`https://www.weatherbit.io/static/img/icons/${weatherImg.icon}.png`} /> */}
      {/* <p>{weatherImg.description}</p> */}
      {/* <p>High: {today.high_temp} °F</p> */}
      {/* <p>Low: {today.low_temp} °F</p> */}
   </div>
  </div>
  );
};
export default WeatherHeader;
