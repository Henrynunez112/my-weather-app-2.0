import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherTimezone from './WeatherTimezone';

const WeatherBody = ({weather, currentWeather}) =>{
    
    return (
        <div>
            <WeatherHeader weather={weather} currentWeather={currentWeather} />
            <WeatherTimezone weather={weather} />
        </div>
    )

};
export default WeatherBody;