import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherDay from './WeatherDay';
import Forecast from './Forecast';
import './WeatherBody.css';

const WeatherBody = ({current, weather, sunMoon, currentWeatherImg, forecast}) =>{
    return (
        <div className='weatherBody jumbotron container'>
            <div className='col-sm-3 col-md-auto col-lg-6'>
            <div className='row align-items-start justify-content-start'>
            <WeatherHeader current={current} currentWeatherImg={currentWeatherImg} />
            </div>
            <div className='row align-items-start justify-content-start'>
            <WeatherDay weather={weather} sunMoon={sunMoon} />
            </div>
            </div>
            <div className="col-sm-9">
            <Forecast forecast={forecast} />
            </div>
        </div>
    )

};
export default WeatherBody;