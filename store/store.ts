import { configureStore } from "@reduxjs/toolkit";
import subscriptionReducer from "./subscriptionSlice";

const store = configureStore({
  reducer: {
    subscription: subscriptionReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
