import * as React from "react";
import { useRouter } from "next/router";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { appWithTranslation } from "../i18n";
import { handleRouteChange } from "../lib/analytics";

import "../styles.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
