
import CityComponents from "./Components/CityComponents"
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow:0 3px 6px 0 #555;
padding:20px 10px;
border-radius: 10px;
border:1px solid;
width:380px;
background:white;
`
const Citycomponent = styled.div`
display:flex;
flex-direction: column;

`
const Weathercomponent = styled.div`
display:flex;
flex-direction: column;

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
      <CityComponents/>
      <Weathercomponent></Weathercomponent>
    </Container>

  );
}

export default App;
