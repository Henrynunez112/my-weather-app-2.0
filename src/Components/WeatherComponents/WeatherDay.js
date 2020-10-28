import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone'

const WeatherDay = ({day, weather}) =>{
    let sunrise = new Date(day.sunrise);
    let sunset = new Date(day.sunset);
    return(
        <div className="weatherDay">
            <p>Timezone: <span>{weather.timezone}</span></p>
            <p>
            Sunrise: <Moment date={sunrise} format="hh:mm"/> A.M.
            </p>
            <p>
             Sunset: <Moment date={sunset} format="hh:mm"/> P.M.
            </p>
          </div>
    )


};
export default WeatherDay;