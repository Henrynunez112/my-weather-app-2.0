import React from 'react';
import Moment from 'react-moment';
import './WeatherDay.css';
import 'moment-timezone';

const WeatherDay = ({weather, sunMoon}) =>{
    let sunrise = new Date(sunMoon.sunrise);
    let sunset = new Date(sunMoon.sunset);
    return(
        <div className="weatherDay col-4 justify-content-start align-content-start">
            <div className='row weatherDayBody justify-content-center align-content-center'>
            <p>Timezone: <span>{weather.timezone}</span></p>
            <p>
            Sunrise: <Moment date={sunrise} format="hh:mm A"/>
            </p>
            <p>
             Sunset: <Moment date={sunset} format="hh:mm A"/>
            </p>
            </div>
          </div>
    )


};
export default WeatherDay;