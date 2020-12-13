import React, { useState, useEffect } from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherDay from './WeatherDay';
import Forecast from './Forecast';
import './WeatherBody.css';

const WeatherBody = ({ current, weather, sunMoon, currentWeatherImg, forecast, theme }) => {
    const [currentWeather, setCurrentWeather] = useState("")
    let backgroundColor = '';
    console.log(currentWeather)


    useEffect(() => {
        setCurrentWeather(currentWeatherImg.description)
    }, [currentWeatherImg])


    switch (currentWeather) {
        case 'mist':
            backgroundColor = 'purple';
            break;
        case 'snow':
        case 'broken clouds':
            backgroundColor = 'grey';
            break;
        case 'thunderstorm':
            backgroundColor = 'blue';
            break;
        case 'rain':
        case 'shower rain':
            backgroundColor = 'green';
            break;
        case 'clear sky':
        case 'few clouds':
        case 'scattered clouds':
            backgroundColor = 'yellow';
            break;
        default:
            backgroundColor = 'black';

    }

    const darkModeWeatherBody = {
        border: '3px solid #f0883e',
        backgroundSize: 'cover',
        backgroundColor: `${backgroundColor}`
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