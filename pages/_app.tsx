import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "../i18n";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
