import React, { useEffect, useState } from "react";
import WeatherBody from "../WeatherComponents/WeatherBody";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [current, setCurrent] = useState({})

  const key = process.env.REACT_APP_API_KEY;
  
  
  //created a promise call to get the longitude and latitude
  const getLocation = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve([position.coords.latitude, position.coords.longitude]);
      });
    });
  };
  
  const weatherCall = async (lat, lon) => {
    console.log(lat, lon)
    try{
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${key}&units=imperial`)
      debugger
      setCurrent(res.data.current)
      return res.data;
    }catch(err){
      console.log(err)
    }
  };

  const setting = (res) => {
    setWeather(res);
  };

  const pageLoad = () => {
    getLocation().then((res) => {
      weatherCall(res[0], res[1]).then((res) => setting(res));
    });
  };
  
  useEffect(() => {
      pageLoad()
  }, []);

  return (
    <div className="weatherDiv">
      <WeatherBody weather={weather} current={current} />
    </div>
  );
};
export default Weather;
