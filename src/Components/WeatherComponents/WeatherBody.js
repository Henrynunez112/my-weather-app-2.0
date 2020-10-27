import React from 'react';
import WeatherHeader from './WeatherHeader';

const WeatherBody = ({weather, currentWeather}) =>{
    
    return (
        <div>
            <WeatherHeader weather={weather} currentWeather={currentWeather} />
        </div>
    )

};
export default WeatherBody;