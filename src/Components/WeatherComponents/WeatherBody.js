import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherDay from './WeatherDay';
import './WeatherBody.css';
// import SevenDayForcast from './SevenDaysForcast';

const WeatherBody = ({current, weather, sunMoon, currentWeatherImg}) =>{
    debugger
    return (
        <div className='weatherBody'>
            <WeatherHeader current={current} currentWeatherImg={currentWeatherImg} />
            <WeatherDay weather={weather} sunMoon={sunMoon} />
        </div>
    )

};
export default WeatherBody;