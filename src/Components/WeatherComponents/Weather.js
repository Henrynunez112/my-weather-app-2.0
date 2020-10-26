import React, { useEffect, useState } from "react";
import WeatherBody from "../WeatherComponents/WeatherBody";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState({});
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
    debugger;
    try{
      let res = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${key}&units=I`);
      setWeather(res.data.data[0])
      // return res.data;
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
    <div>
      <WeatherBody weather={weather} />
    </div>
  );
};
export default Weather;
