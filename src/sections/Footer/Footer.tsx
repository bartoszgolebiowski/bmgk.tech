import * as React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Link,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const links = [
    { href: "#aboutUs", label: t("About us") },
    { href: "#services", label: t("Services") },
    { href: "#ourGoals", label: t("Our goals") },
    { href: "#products", label: t("Products") },
    { href: "#custom", label: t("Custom") },
    { href: "#downloads", label: t("Downloads") },
    { href: "#contact", label: t("Contact") },
  ];

  return (
    <Box as="footer" bg="ink.900" color="whiteAlpha.800">
      <Container maxW="6xl" py={{ base: 12, md: 16 }}>
        <Grid templateColumns={{ base: "1fr", md: "1.4fr 1fr 1fr" }} gap={10}>
          <Box>
            <Flex
              asChild
              display="inline-flex"
              align="center"
              bg="white"
              px={4}
              py={2.5}
              borderRadius="xl"
              _hover={{ textDecoration: "none", opacity: 0.9 }}
            >
              <a href="#hero">
                <img
                  src="/svg/BMGK.svg"
                  alt="BMGK.tech"
                  style={{ height: 26, width: "auto" }}
                />
              </a>
            </Flex>
            <Text mt={5} maxW="xs" fontSize="sm" lineHeight="tall">
              {t("Footer tagline")}
            </Text>
          </Box>

          <Box>
            <Text
              fontSize="xs"
              fontWeight={700}
              letterSpacing="0.08em"
              textTransform="uppercase"
              color="whiteAlpha.500"
              mb={4}
            >
              {t("Navigation")}
            </Text>
            <Stack gap={2.5}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  fontSize="sm"
                  color="whiteAlpha.800"
                  _hover={{ color: "white", textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box>
            <Text
              fontSize="xs"
              fontWeight={700}
              letterSpacing="0.08em"
              textTransform="uppercase"
              color="whiteAlpha.500"
              mb={4}
            >
              {t("Contact")}
            </Text>
            <Stack gap={3} align="flex-start">
              <Link
                href={`mailto:${t("Company email")}`}
                fontSize="sm"
                color="whiteAlpha.800"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                {t("Company email")}
              </Link>
              <Flex
                asChild
                align="center"
                justify="center"
                boxSize="10"
                borderRadius="full"
                bg="white"
                _hover={{ opacity: 0.9 }}
              >
                <a
                  href="https://www.linkedin.com/company/bmgk/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img
                    src="/svg/linkedin.svg"
                    alt=""
                    style={{ width: 18, height: 18 }}
                  />
                </a>
              </Flex>
            </Stack>
          </Box>
        </Grid>

        <Separator my={10} borderColor="whiteAlpha.200" />

        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align={{ base: "flex-start", sm: "center" }}
          gap={2}
          fontSize="sm"
          color="whiteAlpha.600"
        >
          <Text>
            © {year} {t("BMGK TM")}. {t("All rights reserved")}
          </Text>
          <Text>{t("Footer note")}</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
