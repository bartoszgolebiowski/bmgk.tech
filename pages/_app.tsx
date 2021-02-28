import * as React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { appWithTranslation } from "../i18n";

import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
