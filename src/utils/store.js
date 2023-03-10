import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        user:UserSlice
    }
});

export default store;