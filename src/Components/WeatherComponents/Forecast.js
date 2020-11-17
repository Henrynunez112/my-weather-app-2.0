import React from 'react';

const Forcast = ({forecast}) =>{
    return forecast.map((day, i) =>{
        return (
            <div key={i} className="forecast container">
                <div>
                <img
            alt=""
            className="sevenDayImg"
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          />
                </div>

            </div>
        )
    })

};

export default Forcast