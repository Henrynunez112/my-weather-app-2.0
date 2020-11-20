import React, { useEffect, useState } from "react";
import WeatherBody from "../WeatherComponents/WeatherBody";
import axios from "axios";
import './Weather.css';

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [current, setCurrent] = useState({});
  const [sunMoon, setSunMoon] = useState({});
  const [forecast, setForecast] = useState([])
  const [currentWeatherImg, setCurrentWeatherImg] = useState([]);

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
    try{
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${key}&units=imperial`)
      setCurrent(res.data.current);
      setCurrentWeatherImg(res.data.current.weather[0]);
      setForecast(res.data.daily)
      return res.data;
    }catch(err){
      console.log(err)
    }
  };

  const sunriseSunset = async (lat, lon) => {
    try{
      let res = await axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&formatted=0`);
      return res.data.results
    }catch(err){
      console.log(err)

    }
  }

  const setting = (res) => {
    setWeather(res);
  };

  const hoursOfSunAndMoon = (res) =>{
    setSunMoon(res)
  }

  const pageLoad = () => {
    getLocation().then((res) => {
      weatherCall(res[0], res[1]).then((res) => setting(res));
      sunriseSunset(res[0], res[1]).then((res) => hoursOfSunAndMoon(res));
    });
  };
  
  useEffect(() => {
      pageLoad()
  }, []);

  return (
    <div className="weatherDiv container">
      <WeatherBody weather={weather} current={current} sunMoon={sunMoon} currentWeatherImg={currentWeatherImg} forecast={forecast} />
    </div>
  );
};
export default Weather;
