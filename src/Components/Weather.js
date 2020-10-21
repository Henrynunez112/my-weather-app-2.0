import React, { useEffect, useState } from "react";
import axios from "axios";
const { WEATHER_API_KEY } = process.env;

const Weather = () => {
  const [weather, setWeather] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  //created a promise call to get the longitude and latitude
  const getLocation = async () => {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve([position.coords.latitude, position.coords.latitude]);
      });
    });
  };

  const weatherCall = async (lat, lon) => {
    let res = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
    return res.data
  };

  const pageLoad = () =>{
      
  }

  useEffect(() =>{
      pageLoad()
  })

  return <div></div>;
};
export default Weather;
