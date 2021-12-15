import {configureStore} from "@reduxjs/toolkit"
import valueReducer from "../features/valueSlice";

export const Store=configureStore({
    reducer:{
        valueslice:valueReducer,
    }
})