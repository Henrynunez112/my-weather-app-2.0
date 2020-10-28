import React from 'react';
import moment from "moment";


const SevenDaysForcast = ({currentWeather}) =>{
    let forcasts = currentWeather;
    return(
        <div className="sixDays">  
            <ul>
                {forcasts.map((forcast, i) =>{
                    if(i > 0){
                        return(
                            <div key={i + 1} className="singleDateDiv">
                                <li className="singleDate">
                                    <h3>{moment(forcast.datetime).format('dddd')}</h3>
                                    <img className="forcastImg" alt="seven day forcast" src={`https://www.weatherbit.io/static/img/icons/${forcast.weather.icon}.png`} />
                                    <h5>{forcast.weather.description}</h5>
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