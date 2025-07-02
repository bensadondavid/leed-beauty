import { configureStore } from "@reduxjs/toolkit";
import userReducer from './usersSlices'

const store = configureStore({
    reducer : {
        user : userReducer
    }
})

export default store