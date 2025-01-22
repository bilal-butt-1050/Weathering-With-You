import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Background from './Components/Background';
import Weather from './Components/Weather';
import getWeather, { getCurrentLocation } from './Components/Api';

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const getWeatherByCity = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setCity("");
  }

  const getWeatherByCurrentLocation = async ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(async(position)=>{
        const {latitude, longitude} = position.coords;
        const weatherData = await getCurrentLocation(latitude, longitude);
        setWeather(weatherData);
      })
    }
  }

  useEffect(()=>{
    getWeatherByCurrentLocation();
  },[])

  return (
    <div>
      <Navbar city={city} setCity={setCity} weather={weather} setWeather={setWeather} getWeatherByCity={getWeatherByCity} />
      <Background />
      <Weather city={city} setCity={setCity} weather={weather} setWeather={setWeather} getWeatherByCity={getWeatherByCity} />
    </div>
  );
}

export default App;