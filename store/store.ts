"use client";

// import { apiSlice } from "./api/apiSlice";
// import auth from './Features/auth/authSlice';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import subscription from "./subscriptionSlice";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: [apiSlice.reducerPath],
};

const rootReducer = combineReducers({
  // [apiSlice.reducerPath]: apiSlice.reducer,
  // auth,
  subscription,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
