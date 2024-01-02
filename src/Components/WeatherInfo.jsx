import React from 'react'

function WeatherInfo({ data }) {
  console.log(data)
  return (
    <div className="weather-info ">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">City: {data.name}</h5>
          <h6 class="card-subtitle mb-2">Current temperature: {data.main.temp} °C</h6>
          <p class="card-text">Feels Like: {data.main.feels_like} °C</p>
          <p class="card-text">Humidity: {data.main.humidity} %</p>
          <p class="card-text">Wind speed: {data.wind.speed} m/s</p>
          <p class="card-text">Max: {data.main.temp_max} °C, Min: {data.main.temp_min} °C</p>
          <div id="img-container"><img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="WeatherIcon" /></div>
        </div>
      </div>
      {/* <h2>{data.name}</h2>
      <p>Temperature {data.main.temp} C</p>
      <p>Humidity {data.main.humidity} %</p>
      <p>Wind speed {data.wind.speed} m/s</p>
      <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="WeatherIcon" /> */}
    </div>
  )
}

export default WeatherInfo