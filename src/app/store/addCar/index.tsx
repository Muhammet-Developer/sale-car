import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IModule } from "..";

const initialState = {
total:0    
}

export const AddCarSlice = createSlice({
    name:'addCar',
    initialState,
    reducers:{
        SET_TOTAL:(state,action:PayloadAction<number>)=>{
            state.total = action.payload
        }
    }
})

export const {SET_TOTAL} = AddCarSlice.actions;
export const addCarSelector = (state:IModule) => state.addCar
export default AddCarSlice.reducer;