import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedOut : false
}

const logoutSlice = createSlice({
    name : 'login',
    initialState,
    reducers : {
        logOut : (state) => {
            //console.log(state.isLoggedOut);
            state.isLoggedOut = true;
        }
    }
})

export const {logOut} = logoutSlice.actions;
export default logoutSlice.reducer;
