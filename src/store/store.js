import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice
    }
    //TODO; 
    // Add the post reducers here
})

export default store;
