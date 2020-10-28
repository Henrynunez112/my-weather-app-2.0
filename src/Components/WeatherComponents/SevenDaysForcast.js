import React from 'react';
import moment from "moment";


const SevenDaysForcast = ({currentWeather}) =>{
    let forcasts = currentWeather
    return(
        <div>  
            <ul>
                {forcasts.map((forcast) =>{
                    debugger
                   
                        return(
                            <div>
                                <li>
                                    <p>{moment(forcast.datetime).format('MMMM Do YYYY')}</p>
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