import React from 'react';
import moment from "moment";


const SevenDaysForcast = ({currentWeather}) =>{
    let forcasts = currentWeather
    return(
        <div>  
            <ul>
                {forcasts.map((forcast, i) =>{
                    debugger
                   
                        return(
                            <div key={i + 1}>
                                <li>
                                    <p>{moment(forcast.datetime).format('MMMM Do YYYY')}</p>
                                    <img className="forcastImg" alt="seven day forcast" src={`https://www.weatherbit.io/static/img/icons/${forcast.weather.icon}.png`} />
                                    <p>High: {forcast.high_temp}°F</p>
      <p>Low: {forcast.low_temp}°F</p>
                                </li>
                            </div>
                        )
                    
                })}
            </ul>

        </div>
    )

}
export default SevenDaysForcast;