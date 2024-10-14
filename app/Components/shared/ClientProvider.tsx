"use client";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/store/store";
import { ClientProviderProps } from "@/lib/typeof";

const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
      <ToastContainer />
    </Provider>
  );
};

export default ClientProvider;
