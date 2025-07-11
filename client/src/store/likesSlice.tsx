import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Product{
    id : string,
    name : string,
    slug : string,
    brand : string,
    color : string,
    price : number,
    description : string,
    image_url : string,
    category : string;
    quantity : number
}

const initialState : Product[] = []

const likesSlice = createSlice({
    name : 'cart',
    initialState : initialState,
    reducers : {
        addToLikes : (state, action : PayloadAction<Product>)=>{
            const item = action.payload
            const existingItem = state.find(i => i.id === item.id)
            if(existingItem){
                existingItem.quantity ++
            }
            else{
                state.push({...item, quantity : item.quantity || 1})
            }
        },
        removeFromLikes : (state, action : PayloadAction<string>)=>{
            return state.filter(item => item.id !== action.payload);
        },
        clearLikes : ()=>{
            return []
        }
    }
})

export const { addToLikes, removeFromLikes, clearLikes } = likesSlice.actions
export default likesSlice.reducer 