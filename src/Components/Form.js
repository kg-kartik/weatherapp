import React , {Component} from "react"
import Form from "./Components/Form"
import Weather from "./Components/Weather";

const API_KEY= "38c210fe06f1e3d9b5710ebc36c39ffb"
class App extends Component {
    state = {
      temperarture : undefined,
      city : undefined,
      country : undefined,
      humidity : undefined,
      description : undefined
    }
    getWeather = async(e) => {
      e.preventDefault()
      const city = e.target.elements.City.value
      const country = e.target.elements.Country.value
      const api_call =await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      console.log(data)
      this.setState({
        temperarture : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description
      }) 
  }
    render(){
      return(
        <div>
          <Form getWeather={this.getWeather}>
          <Weather
          temperarture = {this.state.temperarture}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.descriptions} />
          </Form>       
        </div>
      )
    }
  }
  temperature = {weather.main.temp}
      humidity = {weather.main.humidity} 
      description = {weather.weather[0].description} />
 
export default App