import React from 'react';
import Moment from 'react-moment';
import './Forecast.css';

const Forcast = ({ forecast }) => {

  return forecast.map((day, i) => {

    if (i > 0) {
      return (
        <div key={i} className="forecast col">

          <div className="forecastImg row">
            <img
              alt=""
              className="sevenDayImg"
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            />
          </div>

          <div key={i + 1} className="row forcastDay">
            <div className="col dayOfWeek">
              <Moment format="dddd" unix>
                {day.dt}
              </Moment>
            </div>
            <div className="col dayDescription">
              <p id="dayP">{day.weather[0].main}</p>
            </div>


          </div>
          <div key={i + 2} className="row forcastNumber">
            <div className="col forcastNumberDegree">

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