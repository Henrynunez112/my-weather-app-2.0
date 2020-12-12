import React from 'react';
import WeatherHeader from './WeatherHeader';
import background from '../Images/pexels-skitterphoto-928.jpg'
import WeatherDay from './WeatherDay';
import Forecast from './Forecast';
import './WeatherBody.css';

const WeatherBody = ({ current, weather, sunMoon, currentWeatherImg, forecast, theme }) => {
    debugger
    // const magTwoApp = 
    const darkModeWeatherBody = {
        border: '4px solid #db61a2',
        backgroundImage: `linear-gradient(to bottom right, rgba(36, 90, 253, 0.4), rgba(36, 90, 253, 0.4)), url(${background})`,
        backgroundSize: 'cover'
        // backgroundImage: 'url('+`${background}`+')'
    }
    return (
        <div className='weatherBody container' style={theme === 'dark' ? darkModeWeatherBody : null}>
            <div className="row currentWeather">
                <WeatherHeader current={current} currentWeatherImg={currentWeatherImg} />
                <WeatherDay weather={weather} sunMoon={sunMoon} />
            </div>
            <div className="row forecastContainer">
                <div className="col eachForecast">
                    <Forecast forecast={forecast} />
                </div>
            </div>
        </div>
    )

};
export default WeatherBody;