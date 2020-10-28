import React, { useEffect, useState } from "react";
import WeatherBody from "../WeatherComponents/WeatherBody";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [weatherImg, setWeatherImg] = useState({})
  const [today, setToday] = useState({})
  const [day, setDay] = useState({})
  const [currentWeather, setCurrentWeather] = useState([])
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
      let res = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&lat=${lat}&lon=${lon}&units=I&days=7`);
      setCurrentWeather(res.data.data);
      setToday(res.data.data[0]);
      setWeatherImg(res.data.data[0].weather)
      
      return res.data;
    }catch(err){
      console.log(err)
    }
  };

  const weatherDay = async (lat, lon) =>{
    console.log(lat, lon)
    try{
      let res = await axios.get(`https://api.sunrise-sunset.org/json?lng=${lon}&lat=${lat}&formatted=0`);
      return res.data.results;
    }catch(err){
      console.log(err)

    }
  }

  const setting = (res) => {
    setWeather(res);
  };
  const daySetting = (res) =>{
    setDay(res)
  }

  const pageLoad = () => {
    getLocation().then((res) => {
      weatherCall(res[0], res[1]).then((res) => setting(res));
      weatherDay(res[0], res[1]).then((res) => daySetting(res));
    });
  };
  
  useEffect(() => {
    
      pageLoad()
  }, []);

  return (
    <div>
      <WeatherBody weather={weather} currentWeather={currentWeather} today={today} weatherImg={weatherImg} day={day} />
    </div>
  );
};
export default Weather;
