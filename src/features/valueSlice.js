import {createSlice} from "@reduxjs/toolkit"

const initialState={
    value:0
}

export const valueSlice=createSlice({
    name:"valueslice",
    initialState,
    reducers:{
        setInitialValue:(state,action)=>{
            state.value=action.payload;
        },
        addValue:(state,action)=>{
            state.value=state.value+action.payload;
        }

    }
})

export const {setInitialValue,addValue}=valueSlice.actions;
export default valueSlice.reducer;