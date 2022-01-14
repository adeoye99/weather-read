import React,{ useState } from 'react'
import { changeColor } from "../features/theme"
import { useDispatch } from "react-redux";
function Changecolor() {
     const dispatch = useDispatch()
    const [ color,setColor ]= useState("")
    return (
        <div>
            <input
              type = "text"
              onChange = {(event)=>{
                  setColor(event.target.value)
              }}
            >
            </input>
            <button
             onClick = {()=>{
                 dispatch(changeColor(color))
               }
             }
             
             >CHANGE COLOR</button>
            
        </div>
    )
}

export default Changecolor
