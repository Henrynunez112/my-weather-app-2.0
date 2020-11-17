import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherDay from './WeatherDay';
import Forecast from './Forecast';
import './WeatherBody.css';

const WeatherBody = ({current, weather, sunMoon, currentWeatherImg, forecast}) =>{
    return (
        <div className='weatherBody container'>
            <div className="row currentWeather">
            <WeatherHeader current={current} currentWeatherImg={currentWeatherImg} />
            <WeatherDay weather={weather} sunMoon={sunMoon} />
            </div>
            <div className="row">
            <Forecast forecast={forecast} />
            </div>
    
         
        </div>
    )

};
export default WeatherBody;