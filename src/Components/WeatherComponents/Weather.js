import React, { useEffect, useState } from "react";
import WeatherBody from "../WeatherComponents/WeatherBody";
import axios from "axios";
const { WEATHER_API_KEY } = process.env;

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
    debugger
    let res = await axios.get(
      `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3382429b47bd7f5f9290fad35b01287d`
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
