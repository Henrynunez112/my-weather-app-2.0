import React, { useEffect, useState } from "react";
import WeatherBody from "../WeatherComponents/WeatherBody";
import axios from "axios";
require('dotenv').config()
// const { WEATHER_API_KEY } = process.env;

const Weather = () => {
  const [weather, setWeather] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  //created a promise call to get the longitude and latitude
  const getLocation = async () => {
    return new Promise((resolve, reject) => {
      debugger
      navigator.geolocation.getCurrentPosition((position) => {
        resolve([position.coords.latitude, position.coords.longitude]);
      });
    });
  };

  const weatherCall = async (lat, lon) => {
    // const API_URL = "api.openweathermap.org/data/2.5/forecast";
    // const URL = API_URL + ``
    debugger
    let res = await axios.get(
      `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`
    );
    return res.data;
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
    pageLoad();
  });

  return (
    <div>
      <WeatherBody weather={weather} />
    </div>
  );
};
export default Weather;
