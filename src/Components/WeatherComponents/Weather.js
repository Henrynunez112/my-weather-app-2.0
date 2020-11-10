import React, { useEffect, useState } from "react";
import WeatherBody from "../WeatherComponents/WeatherBody";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({})
  // const [weatherImg, setWeatherImg] = useState({})
  // const [today, setToday] = useState({})
  // const [currentWeather, setCurrentWeather] = useState([])
  // const key = process.env.REACT_APP_API_KEY;
  const keyTwo = process.env.REACT_APP_WEATHER_API;
  
  
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
      // let res = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&lat=${lat}&lon=${lon}&units=I&days=7`);
      let res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${keyTwo}&lat=${lat}&lon=${lon}&q=${lat},${lon}&days=5`);

      debugger
      setLocation(res.data.location)
      // setCurrentWeather(res.data.data);
      // setToday(res.data.data[0]);
      // setWeatherImg(res.data.data[0].weather)
      
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
      <WeatherBody weather={weather} location={location} />
      {/* currentWeather={currentWeather} today={today} weatherImg={weatherImg} */}
    </div>
  );
};
export default Weather;
