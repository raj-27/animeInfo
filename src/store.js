import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from "./reducer/cryptoSlice"

let store =configureStore({ 
    reducer:{
        crypto:cryptoSlice,
    }
})

export default store;