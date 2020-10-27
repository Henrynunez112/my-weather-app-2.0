import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherDay from './WeatherDay';

const WeatherBody = ({weather, currentWeather, day}) =>{
    
    return (
        <div>
            <WeatherHeader weather={weather} currentWeather={currentWeather} />
            <WeatherDay day={day} weather={weather} />
        </div>
    )

};
export default WeatherBody;