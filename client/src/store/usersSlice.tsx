import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  street: string;
  zip_code: number;
  city: string;
  email_verified: boolean;
  created_at: string;
  updated_at: string;
}

interface UserState {
  user: User | null;
  accessToken: string | null;
}

const initialState: UserState = {
  user: null,
  accessToken: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUserInfos: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    resetUser: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { addUserInfos, resetUser } = userSlice.actions;
export default userSlice.reducer;