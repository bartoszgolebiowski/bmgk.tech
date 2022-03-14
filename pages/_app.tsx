import * as React from "react";
import { useRouter } from 'next/router'
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { appWithTranslation } from "../i18n";
import * as ga from '../lib/analytics'

import "../styles.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
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
