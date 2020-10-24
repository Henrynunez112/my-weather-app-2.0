import React from "react";

const WeatherHeader = ({ weather }) => {
  console.log(weather)
  debugger
  return (
    <div>
      <p>{weather.timezone}</p>
    </div>
  );
};
export default WeatherHeader;
