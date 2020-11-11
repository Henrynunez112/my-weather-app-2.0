import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherDay from './WeatherDay';
// import SevenDayForcast from './SevenDaysForcast';

const WeatherBody = ({current, weather, sunMoon, currentWeatherImg}) =>{
    debugger
    return (
        <div>
            <WeatherHeader current={current} currentWeatherImg={currentWeatherImg} />
            <WeatherDay weather={weather} sunMoon={sunMoon} />
            {/* <SevenDayForcast currentWeather={currentWeather} /> */}
        </div>
    )

};
export default WeatherBody;