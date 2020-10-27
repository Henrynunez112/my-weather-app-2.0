import React from 'react';

const WeatherTimezone = ({weather}) =>{
    debugger
    return(
        <div className="weatherTimezone">
            <p>{weather.timezone}</p>
            <p>Sunrise:{weather.sunrise}</p>
            <p>Sunset: {weather.sunset}</p>
          </div>
    )


};
export default WeatherTimezone;