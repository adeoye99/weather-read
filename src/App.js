import CityComponents from "./Components/CityComponents"
import WeatherComponents from "./Components/WeatherInfocopmonents"
import styled from "styled-components";
import "./index.css";

const Container = styled.div`
display: flex;
flex-direction:column;
margin:auto;
align-items:center;
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
  return (
    <Container>
      <Label>Weather Read</Label>
      <WeatherComponents/>
    </Container>

  );
}

export default App;
