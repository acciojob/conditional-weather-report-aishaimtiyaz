import React, { useState } from "react";


const WeatherDisplay = ({weatherInput}) => {


  return (

    <div>
         <h2>Current Weather</h2>
         {weatherInput.temperature > 20 ? <p style={{color:"red"}}>Temperature: {weatherInput.temperature}°C</p> : <p style={{color:"blue"}}>Temperature: {weatherInput.temperature}°C</p>}
        <p>Conditions: {weatherInput.conditions}</p>
    </div>
  )
}

export default WeatherDisplay