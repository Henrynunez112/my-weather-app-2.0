import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherDay from './WeatherDay';
import SevenDayForcast from './SevenDaysForcast';

const WeatherBody = ({weather, currentWeather, day, today, weatherImg}) =>{
    
    return (
        <div>
            <WeatherHeader weather={weather} today={today} weatherImg={weatherImg} />
            <WeatherDay day={day} weather={weather} />
            <SevenDayForcast currentWeather={currentWeather} />
        </div>
    )

};
export default WeatherBody;