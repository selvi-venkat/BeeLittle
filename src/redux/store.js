import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import logout from './logoutSlice';

const store = configureStore({
    reducer : {
        counter : counterReducer,
        login : logout
    }
})

export default store;