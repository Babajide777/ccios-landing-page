import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubscriptionState {
  subscribed: boolean;
}

const initialState: SubscriptionState = {
  subscribed: false
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    subscribe: state => {
      state.subscribed = true;
    },
    unsubscribe: state => {
      state.subscribed = false;
    }
  }
});

export const { subscribe, unsubscribe } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
