import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherDay from './WeatherDay';
import SevenDayForcast from './SevenDaysForcast';

const WeatherBody = ({weather, location}) =>{
    // currentWeather, day, today, weatherImg
    return (
        <div>
            {/* <WeatherHeader location={location} /> */}
            {/* <WeatherDay day={day} weather={weather} /> */}
            {/* <SevenDayForcast currentWeather={currentWeather} /> */}
        </div>
    )

};
export default WeatherBody;