import React, { useState } from "react";


const WeatherDisplay = ({weatherInput}) => {


  return (

    <div>
         <h2>Current Weather</h2>
         {weatherInput.temperature > 20 ? <span style={{color:"red"}}>Temperature: {weatherInput.temperature}</span> : <span style={{color:"blue"}}>Temperature: {weatherInput.temperature}</span>}
        <p>Conditions: {weatherInput.conditions}</p>
    </div>
  )
}

export default WeatherDisplay