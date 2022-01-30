import React, { useEffect, useState } from "react"
import axios from "axios";
import CityComponents from "./Components/CityComponents"
import styled from "styled-components";
import "./index.css";
import WeatherComponent from "./Components/WeatherInfocopmonents";
const API_KEY = "aa899967734f43c3d5c892c656535cfc"
const Container = styled.div`
display: flex;
flex-direction:column;
margin: auto;
align-items: center;
box-shadow:0 3px 6px 0 #555;
padding:20px 10px;
border-radius: 5px;
border:1px solid;
width:380px;
background:white;
`
const Label = styled.span`
color:black;
font-size: 19px;
font-weight:bold;
`
function App() {
  const [city ,updateCity] = useState();
  const [weather, updateWeather] = useState();
useEffect(()=>{
  fetchWeather();
  return() =>{
    (response)
  }

})
 const fetchWeather = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    updateWeather(response.data)
     
  }
  return (
    <Container>
      <Label>Weather Read</Label>
      {weather ? (
          <WeatherComponent weather={weather} />
      ):(
      <CityComponents updateCity = {updateCity} fetchWeather= {fetchWeather}/>
      )}
    </Container>

  );
}

export default App;
