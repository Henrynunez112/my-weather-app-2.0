import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone'

const WeatherDay = ({weather}) =>{
    debugger
    // let sunrise = new Date(day.sunrise);
    // let sunset = new Date(day.sunset);
    return(
        <div className="weatherDay">
            <p>Timezone: <span>{weather.timezone}</span></p>
            {/* <p>
            Sunrise: <Moment date={sunrise} format="hh:mm A"/>
            </p>
            <p>
             Sunset: <Moment date={sunset} format="hh:mm A"/>
            </p> */}
          </div>
    )


};
export default WeatherDay;