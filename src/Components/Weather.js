import React from "react"

const Weather = (props) => (
  <div>
    <p>City :  {props.city}</p>
    <p>Humidity : {props.humidity} </p>
    <p>Temperature : {props.wind} </p>
    <p>Humidity : {props.humidity} </p>
    <p>Description : {props.description} </p>
  </div>
)
export default Weather