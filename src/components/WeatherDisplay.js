import React, { useState } from "react";


const WeatherDisplay = ({weatherInput}) => {


  return (

    <div>
         <h2>Current Weather</h2>
        <p>Temperature: <span style={{color: weatherInput.temperature > 20 ? 'red' : 'blue'}}>{weatherInput.temperature}</span></p>
        <p>Conditions: {weatherInput.conditions}</p>
    </div>
  )
}

export default WeatherDisplay
