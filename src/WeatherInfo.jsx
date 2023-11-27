import React from 'react'

function WeatherInfo({data}) {
  return (
    <div className="weather-info">
        <h2>{data.name}</h2>
        <p>Temperature {data.main.temp} C</p>
        <p>Humidity {data.main.Humidity} %</p>
        <p>Wind speed {data.wind.speed} m/s</p>
        <img src={'https://openweathermap.org/img/w/${data.weather[0].icon}.png'} alt="WeatherIcon"/> 
    </div>
  )
}

export default WeatherInfo