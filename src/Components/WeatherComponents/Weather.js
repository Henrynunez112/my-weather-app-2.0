import React, { useEffect, useState } from "react";
import WeatherBody from "../WeatherComponents/WeatherBody";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
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
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
    debugger;
    let res = await axios.get(API_URL);
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
      pageLoad()
  }, []);

  return (
    <div>
      <WeatherBody weather={weather} />
    </div>
  );
};
export default Weather;
