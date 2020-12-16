import React, { useState, useEffect } from 'react';
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
        border: `4px solid ${textColor}`,
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(${backgroundColor})`,
        color: `${textColor}`,
        transition: 'all 0.25s linear'
    }

    const darkModeBorder = {
        border: `4px solid ${textColor}`,
        color: `${textColor}`,
        transition: 'all 0.25s linear'
    }


    return (
        <div className='weatherBody container' style={theme === 'dark' ? darkModeWeatherBody : null}>
            <div className="row justify-content-around weatherHeaderRow" style={theme === 'dark' ? darkModeBorder: null}>
                <WeatherHeader current={current} currentWeatherImg={currentWeatherImg} />
                <WeatherDay weather={weather} sunMoon={sunMoon} />
            </div>
            <div className="row forcastContainer justify-content-center">
                <Forecast forecast={forecast} />
            </div>
        </div>
    )

};
export default WeatherBody;


// <!-- Why Adhoc? Text -->
// <div class="row">
//   <div class="col">
//     <h2 class='text-center display-4'>Why Adhoc?</h2>
//   </div>
// </div>

// <!-- Image Reasons Section -->
// <div class="row justify-content-center">
//   <div class="col-8 col-md-4 my-2">
//     <!-- First card goes here -->
//     <div class="card border-0">
//     <img src="https://content.codecademy.com/courses/learn-bootstrap-4/adhoc/experienced.png" class="card-img-top" />
//     <p class="card-text my-1 text-center">Over 9,000 happy clients, and we learn something new from each one.</p>
//     </div>

//   </div>

//   <div class="col-8 col-md-4 my-2">
//     <!-- Second card goes here -->
//     <div class="card border-0">
//     <img src="https://content.codecademy.com/courses/learn-bootstrap-4/adhoc/fun.png" class="card-img-top" />
//     <p class="card-text my-1 text-center">Administration? Fun? Yea, somehow we make it happen.</p>
//       </div>

//   </div>

//   <div class="col-8 col-md-4 my-2">
//     <!-- Third card goes here -->
//     <div class="card border-0">
//     <img src="https://content.codecademy.com/courses/learn-bootstrap-4/adhoc/smart.png" class="card-img-top" />
//     <p class="card-text my-1 text-center">Innovative solutions to the trickest of everyday task.</p>
//       </div>
//   </div>
// </div>