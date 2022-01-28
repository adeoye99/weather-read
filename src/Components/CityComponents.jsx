import React from "react"
import styled from "styled-components"
const Weatherlogo = styled.img`
height:130px;
width:120px;
margin: 40px auto
`
const Choosecity  = styled.span`
display: flex;
flex-direction:row

`


const CityComponents = () =>{
    return (
    <div>
        <Weatherlogo src = "/icons/perfect-day.svg"/>
    </div>
   )

}
export default  CityComponents;