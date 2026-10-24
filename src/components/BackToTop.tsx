import * as React from "react";
import { Box } from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import { ArrowUpIcon } from "./Icons";
import useScrolled from "../utils/hooks/useScrolled";

const BackToTop = () => {
  const { t } = useTranslation();
  const visible = useScrolled(600);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener
      ? mediaQuery.addEventListener("change", update)
      : mediaQuery.addListener(update);
    return () => {
      mediaQuery.removeEventListener
        ? mediaQuery.removeEventListener("change", update)
        : mediaQuery.removeListener(update);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <Box
      asChild
      position="fixed"
      right={{ base: 4, md: 6 }}
      bottom={{ base: 4, md: 6 }}
      zIndex={30}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="12"
      h="12"
      borderRadius="full"
      bg="white"
      color="brand.700"
      borderWidth="1px"
      borderColor="ink.200"
      boxShadow="card"
      opacity={visible ? 1 : 0}
      pointerEvents={visible ? "auto" : "none"}
      transform={visible ? "translateY(0)" : "translateY(12px)"}
      transition="opacity .2s ease, transform .2s ease"
      _hover={{ bg: "brand.50", transform: "translateY(-2px)" }}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t("Back to top")}
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
      >
        <ArrowUpIcon width={20} height={20} />
      </button>
    </Box>
  );
};

export default BackToTop;
