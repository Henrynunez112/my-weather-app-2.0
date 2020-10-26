import React from 'react';
import WeatherHeader from './WeatherHeader';

const WeatherBody = ({weather}) =>{
    
    return (
        <div>
            <WeatherHeader weather={weather} />
        </div>
    )

};
export default WeatherBody;