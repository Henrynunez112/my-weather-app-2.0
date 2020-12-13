import React from 'react';
import Moment from 'react-moment';
import './Forecast.css';

const Forcast = ({ forecast }) => {

  return forecast.map((day, i) => {
    if (i > 0) {
      return (
        <div key={i} className="forecast justify-content-center col-8 col-md-1 my-2">

          <div className="forecastImg row">
            <img
              alt=""
              className="sevenDayImg"
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            />
          </div>

          <div key={i + 1} className="row forcastDay">
            <div className="row justify-content-center text-center dayOfWeek">
              <Moment format="dddd" unix>
                {day.dt}
              </Moment>
            </div>
            <div className="row justify-content-center text-center dayDescription">
              <p className="text-center" id="dayP">{day.weather[0].main}</p>
            </div>


          </div>
          <div key={i + 2} className="row forcastNumber">
            <div className="row justify-content-center forcastNumberDegree">

              <p id="degrees">
                {" "}
                <span id="degSpan">
                  {day.temp.min.toString().slice(0, 2)}°F
            </span> | {day.temp.max.toString().slice(0, 2)}°F

          </p>
            </div>

          </div>

        </div>
      )
    }
  })

};

export default Forcast