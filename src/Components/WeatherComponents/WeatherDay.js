import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone'

const WeatherDay = ({weather, sunMoon}) =>{
    let sunrise = new Date(sunMoon.sunrise);
    let sunset = new Date(sunMoon.sunset);
    return(
        <div className="weatherDay">
            <p>Timezone: <span>{weather.timezone}</span></p>
            <p>
            Sunrise: <Moment date={sunrise} format="hh:mm A"/>
            </p>
            <p>
             Sunset: <Moment date={sunset} format="hh:mm A"/>
            </p>
          </div>
    )


};
export default WeatherDay;