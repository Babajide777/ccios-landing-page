"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubscriptionState {
  subscribed: boolean;
  email: string | null;
}

const initialState: SubscriptionState = {
  subscribed: false,
  email: null,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    subscribe: (state, action) => {
      const { email } = action.payload;
      state.subscribed = true;
      state.email = email as string;
    },
    unsubscribe: (state) => {
      state.subscribed = false;
      state.email = null;
    },
  },
});

export const { subscribe, unsubscribe } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
