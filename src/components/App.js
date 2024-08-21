
import React, { useState,useEffect } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weatherInput, setWeatherInput] = useState({temperature: 0, conditions: ""});

  useEffect(()=>{
    setWeatherInput({temperature: 25, conditions: "Sunny"});
    
  },[]);
  return (

    <div>
       <h1>Weather Application</h1>
        <WeatherDisplay weatherInput={weatherInput} />
    </div>
  )
}

export default App
