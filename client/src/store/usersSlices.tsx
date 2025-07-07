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

const initialState : User | null = null

const userSlice = createSlice({
    name : 'userSlice',
    initialState : initialState,
    reducers : {
        addUserInfos : (state, action)=>{
            return action.payload
        },
        resetUser : ()=>{
            return null
        }
    }

})

export const {addUserInfos, resetUser} = userSlice.actions
export default userSlice.reducer