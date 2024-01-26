'use client'
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IModule } from "..";

const initialState:addCarType = {
    allCarData: [],
}

export const AddCarSlice = createSlice({
    name: 'addCar',
    initialState,
    reducers: {
        SET_ALL_CAR_DATA: (state, action: PayloadAction<addCarDataType[]>) => {
            state.allCarData = action.payload.reverse();
        },
        ADD_CAR:(state,action: PayloadAction<addCarDataType>)=>{
            // state.allCarData = [...state.allCarData,action.payload];
            state.allCarData.push(action.payload);
        }
    }
})

export const { SET_ALL_CAR_DATA, ADD_CAR } = AddCarSlice.actions;
export const addCarSelector = (state: IModule) => state.addCar
export default AddCarSlice.reducer;