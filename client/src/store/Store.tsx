import { configureStore } from "@reduxjs/toolkit";
import userReducer from './usersSlices'

const store = configureStore({
    reducer : {
        users : userReducer
    }
})

export default store