import Searchbar from './Components/Searchbar'
import WeatherInfo from './Components/WeatherInfo';
import axios from 'axios'
import { useState } from 'react';


function App() {
  const API_KEY = "fad41a082a3d6d7ea184e725e4c69ef3";//remove key when pushing to git
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (location) => {
    try {
      //ja jab kahin string mein ${variableNAme} ho to use backtick(``) push krne se pehle remove krdiyega
      const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
      setWeatherData(responce.data);
      setError(null);

    } catch (error) {
      setError('Fail to fetch weather data');
    }
  }

  return (
    <div className="container ">
      <h2 className='mb-3'>Weather App</h2>
      <Searchbar onSearch={fetchWeather} />
      {weatherData && <WeatherInfo data={weatherData} />}
      {error && <p>{error}</p>}
      <p className='text-center fixed-bottom'>Developed By <a href="https://github.com/AsmaGhafoor">Asma Ghafoor</a></p>
    </div>
  )
}

export default App;
