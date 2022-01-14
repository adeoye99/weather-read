import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:{name:"",age:0 ,email:""}}
export const userSlice = createSlice({
    name:"user",
    initialState:{value:{name:"",age:0 ,email:""}},
    reducers:{
        login:(state,action) =>{
            state.value = action.payload;
        },
        logout:(state)=>{
            state.value = initialState
        }

    }
});
export const { login , logout} = userSlice.actions;
export default userSlice.reducer;