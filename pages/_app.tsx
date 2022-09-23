import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import { createContext, useState } from "react";
import { SignupProvider } from "../utils/user";
import { MakeProvider } from "../utils/data";
import { AuthProvider } from "../utils/auth";

export const AppContext = createContext(null);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SignupProvider>
      <MakeProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </MakeProvider>
    </SignupProvider>
  );
}

export default MyApp;
