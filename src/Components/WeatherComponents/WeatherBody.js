import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherDay from './WeatherDay';
import './WeatherBody.css';
// import SevenDayForcast from './SevenDaysForcast';

const WeatherBody = ({current, weather, sunMoon, currentWeatherImg}) =>{
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
        </div>
    )

};
export default WeatherBody;