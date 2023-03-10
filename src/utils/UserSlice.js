import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:'user',
    initialState:{
        user:[]
    },
    reducers:{
        login(state, action){
            state.user.push(action.payload)
        },
        logout(state){
            state.user=[]
        }
    }
});


export const {login, logout} = UserSlice.actions;
export default UserSlice.reducer; 