import * as React from "react";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

const STORAGE_KEY = "bmgk:cookie-consent";

/**
 * GDPR cookie consent banner. It is shown until the user accepts or declines,
 * and the choice is stored in localStorage so it is not shown again.
 * The site currently does not set tracking cookies, but this keeps the
 * consent mechanism ready for analytics and third-party embeds.
 */
const CookieBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable (e.g. private mode) — still show the banner.
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Ignore storage failures; the banner simply reappears next visit.
    }
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={1250}
      role="region"
      aria-label={t("Cookie banner label")}
      bg="ink.900"
      color="white"
      borderTopWidth="1px"
      borderColor="whiteAlpha.200"
      boxShadow="0 -16px 48px -24px rgba(0,0,0,0.9)"
    >
      <Container maxW="6xl" py={{ base: 4, md: 5 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "stretch", md: "center" }}
          justify="space-between"
          gap={4}
        >
          <Text
            fontSize="sm"
            color="whiteAlpha.800"
            lineHeight="tall"
            maxW={{ md: "3xl" }}
          >
            {t("Cookie banner text")}
          </Text>
          <Flex gap={3} flexShrink={0} align="center">
            <Button
              type="button"
              size="sm"
              px={5}
              variant="outline"
              borderColor="whiteAlpha.300"
              color="whiteAlpha.900"
              bg="transparent"
              borderRadius="full"
              _hover={{ bg: "whiteAlpha.100", textDecoration: "none" }}
              onClick={() => decide("declined")}
            >
              {t("Cookie decline")}
            </Button>
            <Button
              type="button"
              size="sm"
              px={5}
              bg="brand.500"
              color="white"
              borderRadius="full"
              _hover={{ bg: "brand.400", textDecoration: "none" }}
              onClick={() => decide("accepted")}
            >
              {t("Cookie accept")}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default CookieBanner;