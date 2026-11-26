import * as React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next/pages";

import system from "../src/theme";
import Toaster from "../src/components/Toaster";
import CookieBanner from "../src/components/CookieBanner";
import "../styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <Component {...pageProps} />
      <Toaster />
      <CookieBanner />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
