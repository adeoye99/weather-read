import React from "react"
import styled from "styled-components"

const WeatherCondition = styled.div`
display:flex;
flex-direction:row;
align-item: center;
width:100%;
justify-content: space-between;
margin:30px auto;

`
const Weatherlogo = styled.img`
text-align: center;
justify-content: center;
height: 100px;
width: 100px;
margin: 5px auto ;
`
const Condition = styled.span`
margin:20px auto;
font-size: 14px;
& span{
    font-size: 28px;
}
`
const Location = styled.span`
font-size: 1.4rem;
font-weight:bold;

`
const WeatherInfoLabel = styled.span`
font-size: 14px;
font-weight: bold;
margin: 20px 25px 10px;
text-align:start;
width:90%;
`
const WeatherInfocontainer= styled.span`
display:flex;
width:90%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;

`
const InfoContainer = styled.span`
display: flex;
margin:5px 10px;
flex-direction: row;
justify-content: space-evenly;
align-items:center;
`
const InfoLabel = styled.img`
display: flex;
flex-direction: column;
font-size: 14px;
margin:15px;
& span {
    font-size: 12px;
    text-transform: capitalize;
}
`
const InfoIcon = styled.img`
width:36px;
height:36px
`



const WeatherInfocomponent = ()=>{
return(
    <InfoContainer>
        <InfoIcon src ={"/icons/temp.svg"}/>
         <InfoLabel>

         </InfoLabel>

    </InfoContainer>

    
)


}
const WeatherComponent = () =>{
    return (
    <>
        <WeatherCondition>
            <Condition>
               <span>30 C</span> Cloudy
            </Condition>
            <Weatherlogo src = "/icons/perfect-day.svg"/>       
        </WeatherCondition>
         <Location> London, GB</Location>
         <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
         <WeatherInfocontainer>
             <WeatherInfocomponent/>
             <WeatherInfocomponent/>
             <WeatherInfocomponent/>
             <WeatherInfocomponent/>
         </WeatherInfocontainer>
    </>
   )

}
export default  WeatherComponent;