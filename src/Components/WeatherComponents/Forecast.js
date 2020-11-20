import React from 'react';
import Moment from 'react-moment';
// import './Forecast.css';

const Forcast = ({forecast}) =>{
    return forecast.map((day, i) =>{
        return (
            <div key={i} className="forecast container col">
                <div className="forcastImg">
                <img
            alt=""
            className="sevenDayImg"
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          />
                </div>
                <div key={i + 1} className="">
                <Moment format="dddd" unix>
              {day.dt}
            </Moment>
          <p id="dayP">{day.weather[0].main}</p>


                </div>
                <div key={i + 2} className="">
                <p id="degrees">
            {" "}
            <span id="degSpan">
              {day.temp.min.toString().slice(0, 2)}°
            </span> | {day.temp.max.toString().slice(0, 2)}°
          </p>

                </div>

            </div>
        )
    })

};

export default Forcast