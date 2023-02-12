import { createSlice } from "@reduxjs/toolkit";
import {logOut} from './logoutSlice';

const initialState = {count:0};

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : {
            reducer: (state,action) => {state.count += action.payload},
            prepare : (value) => ({payload : value *2})
        }
    },
    extraReducers : (builder) => {
        builder.addCase(logOut,(state,action) => {
            console.log(state.count);
            state.count = 0;
        })
    }
})
export const {increment} = counterSlice.actions;
export default counterSlice.reducer;