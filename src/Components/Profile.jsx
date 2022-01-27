import React from 'react'
import { useSelector } from "react-redux"

function Profile() {
    return (
        <div style = {{color:newColor}}>
           <h1>Profile page</h1>
           <p>Name: {user.name}</p>
           <p>Age: {user.age} </p>
           <p>Email: {user.email}</p>
        </div>
    )
}
export default Profile;
