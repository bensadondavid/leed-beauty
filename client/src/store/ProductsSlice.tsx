import { createSlice } from "@reduxjs/toolkit";

interface Product{
    id : number
    name : string,
    slug : string, 
    brand : string, 
    color : string,
    price : number,
    quantity : number,
    description : string,
    image_url : string, 
    category : string,
    is_active : boolean
}

const initialState : Product[] = []

const ProductsSlice = createSlice({
    name : "products",
    initialState : initialState,
    reducers : {
        setProduct : (state, action)=>{
            state.push(action.payload)
        }
    }
})

export const { setProduct } = ProductsSlice.actions
export default ProductsSlice.reducer