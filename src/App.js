import React , {useEffect, useState} from "react"
import Weather from './Components/Weather.js'

const App = () => {
  const API_KEY = "38c210fe06f1e3d9b5710ebc36c39ffb";
  const [weather,setWeather] = useState ({})
  const [search,setSearch] = useState({city : '', country : ''})
  const [query,setQuery] = useState({city:'London', country : 'uk'})

  useEffect (() => {
    getWeather();
  },[query])

  const getWeather = async() => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query.city},${query.country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    setWeather(data);
  }

 const getQuery  = (e) => {
   e.preventDefault();
   setQuery(search);
 }

  return(
    <div>
      <form className="form" onSubmit={getQuery}>
        <input type="text" name="city" placeholder = "Enter the name of the city" required 
        onChange ={e => setSearch({... search,city : e.target.value})} />
        <input type="text" name="country" placeholder="Enter the name of the country" required 
         onChange ={e => setSearch({... search, country : e.target.value})} />
        <button> Submit </button>
      </form>
      <Weather 
        city = {weather.name} 
        country = {weather.sys.country} 
        temperature = {weather.main.temp}
        humidity = {weather.main.humidity} 
        description = {weather.weather[0].description} />
        />
    </div>
  )
}
export default App