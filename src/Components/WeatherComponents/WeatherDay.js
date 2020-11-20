import React from 'react';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import {faSun} from '@fortawesome/free-solid-svg-icons'
import './WeatherDay.css';
import 'moment-timezone';

const WeatherDay = ({weather, sunMoon}) =>{
    let sunrise = new Date(sunMoon.sunrise);
    let sunset = new Date(sunMoon.sunset);
    return(
        <div className="weatherDay col-4 justify-content-start align-content-start">
            <div className="row weatherDayBody justify-content-center align-content-center">

            <div className="col">
                <div className="row weatherTimezone">
            <h3>Timezone:</h3>
            <h5>{weather.timezone}</h5>
                </div>
            </div>
            <div className="col">
            <FontAwesomeIcon icon={faSun} />
            <p>
            Sunrise: <Moment date={sunrise} format="hh:mm A"/>
            </p>
            </div>
            <div className="col">
            <FontAwesomeIcon icon={faMoon} />
            <p>
             Sunset: <Moment date={sunset} format="hh:mm A"/>
            </p>

            </div>
        
            </div>
          </div>
    )


};
export default WeatherDay;