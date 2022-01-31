import React from "react"
import styled from "styled-components"

const Weatherlogo = styled.img`
text-align: center;
justify-content: center;
height:140px;
width:140px;
margin: 40px;
`
const Choosecity  = styled.span`
display: flex;
flex-direction:row;
text-align:center;
justify-content:center;
font-weight: bold;

`
const SearchBox = styled.form`
display: flex;
flex-direction:row;
border: black solid 1px;
border-radius: 2px;
color: black;
font-size: 18px;
font-weight: bold;
margin: 20px auto;
& input{
    height:30px;
    border: none;
    outline: none
}
& button{
    color: white;
    background-color:black;
    border:none;
    outline:none;
    cursor:pointer;
}
`
const CityComponents = (props) =>{
    const { updateCity , fetchWeather } = props;
    return (
    <>
        <Weatherlogo src = "/icons/perfect-day.svg"/>
        <Choosecity>Find Weather of your city</Choosecity>
        <SearchBox onSubmit = {fetchWeather}>
            <input 
            placeholder = "City"
            onChange = {(e) => updateCity(e.target.value)}   
            />
            <button type = "submit">Search</button>
        </SearchBox>
    </>
   )

}
export default CityComponents;