import React from 'react';
import moment from "moment";


const SevenDaysForcast = ({currentWeather}) =>{
    let forcasts = currentWeather;
    debugger
    return(
        <div>  
            <ul>
                {forcasts.map((forcast, i) =>{
                    if(i > 0){
                        return(
                            <div key={i + 1}>
                                <li>
                                    <p>{moment(forcast.datetime).format('MMMM Do YYYY')}</p>
                                    <img className="forcastImg" alt="seven day forcast" src={`https://www.weatherbit.io/static/img/icons/${forcast.weather.icon}.png`} />
                                    <p>{forcast.weather.description}</p>
                                    <p>Precipitation: {forcast.pop}% </p>
                                    <p>High: {forcast.high_temp.toString().slice(0, 2)} °F</p>
                                    <p>Low: {forcast.low_temp.toString().slice(0, 2)} °F</p>
                                </li>
                            </div>
                        )
                    }
                    
                })}
            </ul>

        </div>
    )

}
export default SevenDaysForcast;