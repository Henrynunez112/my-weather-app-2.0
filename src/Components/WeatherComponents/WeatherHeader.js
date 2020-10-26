import React, {useState, useEffect} from "react";


const WeatherHeader = ({ weather }) => {


debugger
  return (
    <div>
      <p>{weather.timezone}</p>
      <p>{weather.city_name}</p>
    </div>
  );
};
export default WeatherHeader;
