import * as React from "react";
import { Router } from "next/router";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "../../../i18n";

const useCurrentSection = (id: string) => {
  const { i18n } = useTranslation();
  const didMount = React.useRef(false);
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  React.useEffect(() => {
    if (didMount.current === false || inView === false) {
      didMount.current = true;
      return;
    }

    const currentLanguage = i18n.language;
    history.replaceState(
      "",
      document.title,
      window.location.origin + `/${currentLanguage}#${id}`
    );
    Router.events.emit("hashChangeStart", `#${id}`);
  }, [i18n, inView]);

  return {
    ref,
  };
};

export default useCurrentSection;
