import React from "react";


const WeatherHeader = ({ weather }) => {
  const tempInfo = weather.main
  debugger
  console.log(tempInfo)


  return (
    <div>
      <p>{weather.timezone}</p>
    </div>
  );
};
export default WeatherHeader;
