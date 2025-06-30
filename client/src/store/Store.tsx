import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductsSlice'

const store = configureStore({
    reducer : {
        productReducer : productReducer
    }
})

export default store