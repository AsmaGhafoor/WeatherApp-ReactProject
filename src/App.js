import logo from './logo.svg';
import './App.css';
import Searchbar from './Searchbar'
import WeatherInfo from './WeatherInfo'
import axios from 'axios'
import { useState } from 'react';

function App() {
  const[weatherData,setWeatherData]=useState(null);
  const[error,setError]=useState(null);

  const fetchWeather=async(karachi)=>{
    try {
      const responce=await axios.get('https://api.openweathermap.org/data/2.5/weather?q=$(karachi)&appid=${API_KEY}&units=metric');
      setWeatherData(responce.data);
      setError(null);
      
    } catch (error) {
      setError('Fail to fetch weather data');
    }
  }
  
  return(
    <div className="App">
      <Searchbar onSeacrh={fetchWeather}/>
      {weatherData && <WeatherInfo data={weatherData} />}
      {error && <p>{error}</p>}
    </div>
  )
}

export default App;
