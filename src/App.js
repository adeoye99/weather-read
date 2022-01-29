import React, { useState } from "react"
import CityComponents from "./Components/CityComponents"
import WeatherComponents from "./Components/WeatherInfocopmonents"
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
  const fetchWeather = async (e)=>{
    const response = await 
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API_KEY}`)
  }
  return (
    <Container>
      <Label>Weather Read</Label>
      {weather ? (
          <WeatherComponent />
      ):(
      <CityComponents updateCity = {updateCity} />
      )}
    </Container>

  );
}

export default App;
