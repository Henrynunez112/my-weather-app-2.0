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
            <p>Timezone:</p>
            <p>{weather.timezone}</p>
                </div>
            </div>
            <div className="col">
                <div className="row surise">
                    <div className="col">

            <FontAwesomeIcon icon={faSun} />
                    </div>
                    <div className="col">
            <p id="suriseTime">
            <Moment date={sunrise} format="hh:mm A"/>
            </p>

                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row sunset">
                    <div className="col">

            <FontAwesomeIcon icon={faMoon} />
                    </div>
                    <div className="col">
            <p id="sunsetTime">
             <Moment date={sunset} format="hh:mm A"/>
            </p>
                    </div>

                </div>
            </div>
        
            </div>
          </div>
    )


};
export default WeatherDay;