import { createSlice } from "@reduxjs/toolkit";

interface User{
    id : string
    name : string,
    lastname : string, 
    email : string,
    password : string,
    phone : string, 
    street : string, 
    zip_code : number, 
    city : string, 
    email_verified : boolean,
    created_at : string,
    updated_at : string
}

const initialState : Array<User> = []

const userSlice = createSlice({
    name : 'userSlice',
    initialState : initialState,
    reducers : {
        addUserInfos : (state, action)=>{
            state.push(action.payload)
        },
        removeUser : (state, action)=>{
            return state.filter(user => user.id !== action.payload.id)
        },
        resetUser : ()=>{
            return []
        }
    }

})

export const {addUserInfos, removeUser, resetUser} = userSlice.actions
export default userSlice.reducer