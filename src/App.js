import React,{ useState } from "react"
import axios from "axios";
import CityComponents from "./Components/CityComponents";
import WeatherComponent from "./Components/WeatherInfocopmonents";
import { Container,Label } from "./Components/index"

const API_KEY = "aa899967734f43c3d5c892c656535cfc";
function App() {
  const [city ,updateCity] = useState();
  const [weather, updateWeather] = useState();

 const fetchWeather = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    updateWeather(response.data)
     
  }
  return (
    <Container>
      <Label>Weather Read</Label>

      { weather ?(<WeatherComponent weather ={weather}/>):(<CityComponents fetchWeather= {fetchWeather} updateCity = {updateCity}/>)} 
      
    </Container>
  );
}

export default App;
