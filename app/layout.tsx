"use client";

import "./globals.css";
import StyledComponentsRegistry from "./registry";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "../store/store";
import ClientProvider from "./Components/shared/ClientProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          <StyledComponentsRegistry>
            <ClientProvider>{children}</ClientProvider>
          </StyledComponentsRegistry>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
