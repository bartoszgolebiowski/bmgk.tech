import * as React from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import LanguageSelect from "../../components/LanguageSelect";
import { MenuIcon, CloseIcon } from "../../components/Icons";
import useActiveSection from "../../utils/hooks/useActiveSection";
import useScrolled from "../../utils/hooks/useScrolled";

const SECTION_IDS = [
  "hero",
  "aboutUs",
  "services",
  "ourGoals",
  "products",
  "custom",
  "downloads",
  "contact",
];

const Header = () => {
  const { t } = useTranslation();
  const { open, onOpen, onClose, setOpen } = useDisclosure();
  const scrolled = useScrolled();
  const active = useActiveSection(SECTION_IDS);

  const links = React.useMemo(
    () => [
      { id: "aboutUs", href: "#aboutUs", label: t("About us") },
      { id: "services", href: "#services", label: t("Services") },
      { id: "ourGoals", href: "#ourGoals", label: t("Our goals") },
      { id: "products", href: "#products", label: t("Products") },
      { id: "custom", href: "#custom", label: t("Custom") },
      { id: "downloads", href: "#downloads", label: t("Downloads") },
    ],
    [t]
  );

  const linkStyles = (isActive: boolean) => ({
    px: 3,
    py: 2,
    borderRadius: "full",
    fontSize: "sm",
    fontWeight: 600,
    color: isActive ? "white" : "whiteAlpha.800",
    bg: isActive ? "brand.500" : "transparent",
    transition: "background-color .15s ease, color .15s ease",
    _hover: {
      color: "white",
      bg: isActive ? "brand.400" : "whiteAlpha.100",
      textDecoration: "none",
    },
  });

  return (
    <React.Fragment>
      <Box
        as="header"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex={1100}
        borderBottomWidth="1px"
        borderColor={scrolled ? "whiteAlpha.200" : "whiteAlpha.100"}
        bg={scrolled ? "rgba(7, 16, 24, 0.96)" : "rgba(7, 16, 24, 0.84)"}
        boxShadow={scrolled ? "0 18px 50px -28px rgba(0, 0, 0, 0.9)" : "none"}
        css={{ backdropFilter: "saturate(180%) blur(14px)" }}
        transition="background-color .2s ease, box-shadow .2s ease, border-color .2s ease"
      >
        <Container maxW="6xl">
          <Flex align="center" justify="space-between" h={{ base: 16, md: 20 }}>
            <Link
              href="#hero"
              aria-label="BMGK.tech — home"
              display="inline-flex"
              alignItems="center"
              _hover={{ textDecoration: "none" }}
            >
              <img
                src="/svg/BMGK.svg"
                alt="BMGK.tech"
                style={{
                  height: 32,
                  width: "auto",
                  filter: "brightness(0) invert(1)",
                }}
              />
              <Box
                boxSize="2"
                ml={3}
                borderRadius="full"
                bg="brand.400"
                boxShadow="0 0 0 4px rgba(102, 187, 106, 0.14)"
              />
            </Link>

            <HStack
              as="nav"
              aria-label={t("Main navigation")}
              gap={1}
              display={{ base: "none", lg: "flex" }}
            >
              {links.map((link) => {
                const isActive = active === link.id;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    {...linkStyles(isActive)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </HStack>

            <HStack gap={{ base: 2, md: 3 }}>
              <Box display={{ base: "none", md: "block" }}>
                <LanguageSelect tone="dark" />
              </Box>

              <Button
                asChild
                display={{ base: "none", md: "inline-flex" }}
                size="sm"
                px={5}
                h="10"
                bg="brand.600"
                color="white"
                borderRadius="full"
                _hover={{ bg: "brand.500", textDecoration: "none" }}
              >
                <a href="#contact">{t("Contact")}</a>
              </Button>

              <IconButton
                display={{ base: "inline-flex", lg: "none" }}
                aria-label={t("Open menu")}
                aria-expanded={open}
                variant="outline"
                borderColor="whiteAlpha.300"
                color="white"
                borderRadius="full"
                _hover={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.500" }}
                onClick={onOpen}
              >
                <MenuIcon width={20} height={20} />
              </IconButton>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Drawer.Root
        open={open}
        onOpenChange={(details) => setOpen(details.open)}
        placement="end"
        size="sm"
      >
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.CloseTrigger asChild>
              <IconButton
                aria-label={t("Close menu")}
                variant="ghost"
                size="sm"
                position="absolute"
                top="3"
                right="3"
                zIndex={1}
              >
                <CloseIcon width={18} height={18} />
              </IconButton>
            </Drawer.CloseTrigger>
            <Drawer.Header borderBottomWidth="1px" borderColor="ink.100">
              <Drawer.Title>
                <img
                  src="/svg/BMGK.svg"
                  alt="BMGK.tech"
                  style={{ height: 28, width: "auto" }}
                />
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Stack as="nav" aria-label={t("Main navigation")} gap={1} mt={4}>
                {[
                  ...links,
                  { id: "contact", href: "#contact", label: t("Contact") },
                ].map((link) => {
                  const isActive = active === link.id;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      px={4}
                      py={3}
                      borderRadius="xl"
                      fontSize="lg"
                      fontWeight={600}
                      color={isActive ? "brand.700" : "ink.800"}
                      bg={isActive ? "brand.50" : "transparent"}
                      _hover={{
                        bg: "brand.50",
                        color: "brand.700",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </Stack>

              <Box mt={8}>
                <Text
                  fontSize="xs"
                  fontWeight={700}
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  color="ink.500"
                  mb={3}
                >
                  {t("Language")}
                </Text>
                <LanguageSelect onChange={onClose} />
              </Box>
            </Drawer.Body>
            <Drawer.Footer borderTopWidth="1px" borderColor="ink.100">
              <Button
                asChild
                w="100%"
                bg="brand.600"
                color="white"
                borderRadius="full"
                _hover={{ bg: "brand.700" }}
              >
                <a href="#contact" onClick={onClose}>
                  {t("Contact")}
                </a>
              </Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </React.Fragment>
  );
};

export default Header;
