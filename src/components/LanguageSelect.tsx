import * as React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next/pages";

const LANGUAGES = [
  { code: "pl", label: "PL" },
  { code: "en", label: "EN" },
];

type LanguageSelectProps = {
  onChange?: () => void;
  tone?: "light" | "dark";
};

/**
 * Two-state language switcher. Keeps the current path and hash when switching,
 * instead of dropping the user back to the home page.
 */
const LanguageSelect = ({ onChange, tone = "light" }: LanguageSelectProps) => {
  const { t, i18n } = useTranslation();
  const isDark = tone === "dark";
  const router = useRouter();
  const current = (router.locale || i18n.language || "en").slice(0, 2);

  const changeLanguage = (language: string) => {
    if (language === current) {
      onChange?.();
      return;
    }

    void i18n.changeLanguage(language);
    void router.push(
      {
        pathname: router.pathname,
        query: router.query,
        hash: typeof window !== "undefined" ? window.location.hash : undefined,
      },
      router.asPath,
      { locale: language, scroll: false }
    );

    onChange?.();
  };

  return (
    <Flex
      role="group"
      aria-label={t("Change language")}
      align="center"
      bg={isDark ? "whiteAlpha.100" : "ink.100"}
      borderWidth="1px"
      borderColor={isDark ? "whiteAlpha.200" : "ink.200"}
      borderRadius="full"
      p="3px"
      display="inline-flex"
      w="max-content"
    >
      {LANGUAGES.map(({ code, label }) => {
        const isActive = current === code;

        return (
          <Button
            key={code}
            type="button"
            variant="ghost"
            onClick={() => changeLanguage(code)}
            aria-pressed={isActive}
            aria-label={code === "pl" ? "Polski" : "English"}
            minW="9"
            h="7"
            px={2}
            borderRadius="full"
            fontSize="xs"
            fontWeight={700}
            letterSpacing="0.04em"
            color={
              isActive ? (isDark ? "ink.900" : "brand.700") : isDark ? "whiteAlpha.700" : "ink.500"
            }
            bg={isActive ? "white" : "transparent"}
            boxShadow={isActive ? "0 1px 3px rgba(15,23,42,0.12)" : "none"}
            transition="background-color .15s ease, color .15s ease"
            _hover={{
              color: isActive ? (isDark ? "ink.900" : "brand.700") : "white",
              bg: isActive ? "white" : isDark ? "whiteAlpha.200" : "brand.50",
            }}
          >
            {label}
          </Button>
        );
      })}
    </Flex>
  );
};

export default LanguageSelect;
