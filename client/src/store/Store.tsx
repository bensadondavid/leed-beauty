// store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";
import cartReducer from "./cartSlice";
import likesReducer from "./likesSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

// Combine tous tes reducers
const rootReducer = combineReducers({
  users: userReducer,
  cart: cartReducer,
  likes: likesReducer,
});

// Configuration redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "likes"], // ✅ on persiste cart et likes
  // users n'est **pas** ici → il n'est pas sauvegardé
};

// Crée un reducer persistant
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Crée le store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // requis pour redux-persist
    }),
});

// Pour le wrapper dans <PersistGate>
export const persistor = persistStore(store);

// Typage Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;