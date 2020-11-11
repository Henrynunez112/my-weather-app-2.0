import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherDay from './WeatherDay';
// import SevenDayForcast from './SevenDaysForcast';

const WeatherBody = ({current, weather}) =>{
    return (
        <div>
            <WeatherHeader current={current} />
            <WeatherDay weather={weather} />
            {/* <SevenDayForcast currentWeather={currentWeather} /> */}
        </div>
    )

};
export default WeatherBody;