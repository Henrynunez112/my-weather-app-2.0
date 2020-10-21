import React, { useEffect, useState } from "react";
import axios from "axios";
const { WEATHER_API_KEY } = process.env;

const Weather = () => {
  const [weather, setWeather] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  //created a promise call to get the longitude and latitude
  const getLocation = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve([position.coords.latitude, position.coords.latitude]);
      });
    });
  };

  return <div></div>;
};
export default Weather;
