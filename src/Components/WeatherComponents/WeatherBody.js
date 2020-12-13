import React, { useState, useEffect } from 'react';
import clearSkies from '../Images/clearSkies.svg';
import WeatherHeader from './WeatherHeader';
import WeatherDay from './WeatherDay';
import Forecast from './Forecast';
import './WeatherBody.css';

const WeatherBody = ({ current, weather, sunMoon, currentWeatherImg, forecast, theme }) => {
    console.log(currentWeatherImg)
    const [currentWeather, setCurrentWeather] = useState("")
    let backgroundColor = '';
    let textColor = ''

    useEffect(() => {
        setCurrentWeather(currentWeatherImg.description)
    }, [currentWeatherImg])


    switch (currentWeather) {
        case 'mist':
            backgroundColor = 'to bottom left, #355070, #6d597a, #b56576, #e56b6f, #eaac8b';
            textColor = "#E2E2E2";
            break;
        case 'thunderstorm':
            backgroundColor = '#432371, #FAAE7B';
            textColor = "#E2E2E2";
            break;
        case 'snow':
        case 'rain':
        case 'shower rain':
            backgroundColor = 'to bottom left, #EBF4F5, #B5C6EO';
            textColor = '#363537';
            break;
        case 'clear sky':
        case 'few clouds':
        case 'broken clouds':
        case 'scattered clouds':
            backgroundColor = 'to bottom left, #5465ff, #788bff, #9bb1ff, #bfd7ff, #e2fdff';
            textColor = '#363537';
            break;
        default:
            backgroundColor = 'black';
            textColor = '#E2E2E2';

    }

    const darkModeWeatherBody = {
        border: '3px solid #f0883e',
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(${backgroundColor})`,
        color: `${textColor}`
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