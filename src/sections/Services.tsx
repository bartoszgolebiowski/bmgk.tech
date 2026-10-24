import * as React from "react";
import { Box, Button, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import {
  ArrowRightIcon,
  CodeIcon,
  CpuIcon,
  GlobeIcon,
  LayersIcon,
  MonitorIcon,
  PlugIcon,
} from "../components/Icons";

const SERVICES = [
  { title: "ServiceIndustrialTitle", description: "ServiceIndustrialDesc", icon: CodeIcon },
  { title: "ServicePlcTitle", description: "ServicePlcDesc", icon: CpuIcon },
  { title: "ServiceDesktopTitle", description: "ServiceDesktopDesc", icon: MonitorIcon },
  { title: "ServiceWebTitle", description: "ServiceWebDesc", icon: GlobeIcon },
  { title: "ServiceMacroTitle", description: "ServiceMacroDesc", icon: LayersIcon },
  { title: "ServiceIntegrationTitle", description: "ServiceIntegrationDesc", icon: PlugIcon },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <Box as="section" id="services" bg="ink.50" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        <SectionHeading
          eyebrow={t("Services eyebrow")}
          title={t("Services")}
          description={t("Services description")}
        />

        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={5}
        >
          {SERVICES.map(({ title, description, icon: ServiceIcon }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <Box
                h="100%"
                position="relative"
                overflow="hidden"
                bg="white"
                borderWidth="1px"
                borderColor="ink.200"
                borderRadius="2xl"
                boxShadow="card"
                p={{ base: 6, md: 7 }}
                transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "cardHover",
                  borderColor: "brand.200",
                }}
              >
                <Box
                  position="absolute"
                  top="-3rem"
                  right="-3rem"
                  boxSize="9rem"
                  borderRadius="full"
                  bg="radial-gradient(circle, rgba(67,160,71,0.16), transparent 70%)"
                  pointerEvents="none"
                />
                <Text
                  position="absolute"
                  top={5}
                  right={5}
                  fontSize="xs"
                  fontWeight={800}
                  letterSpacing="0.08em"
                  color="brand.100"
                >
                  0{index + 1}
                </Text>
                <Flex
                  align="center"
                  justify="center"
                  boxSize="12"
                  mb={5}
                  borderRadius="2xl"
                  bg="linear-gradient(135deg, rgba(67,160,71,0.14), rgba(142,36,170,0.10))"
                  color="brand.700"
                >
                  <ServiceIcon width={24} height={24} />
                </Flex>
                <Heading as="h3" size="md" mb={2}>
                  {t(title)}
                </Heading>
                <Text color="ink.600" fontSize="sm" lineHeight="tall">
                  {t(description)}
                </Text>
              </Box>
            </Reveal>
          ))}
        </Grid>

        <Reveal delay={0.1}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            mt={{ base: 8, md: 12 }}
            p={{ base: 7, md: 9 }}
            borderRadius="3xl"
            bg="linear-gradient(120deg, #1b5e20 0%, #2e7d32 55%, #6a1b9a 130%)"
            boxShadow="card"
          >
            <Box maxW="2xl" mb={{ base: 5, md: 0 }}>
              <Heading as="h3" size="lg" color="white" mb={2}>
                {t("Cta title")}
              </Heading>
              <Text color="whiteAlpha.800" lineHeight="tall">
                {t("Cta description")}
              </Text>
            </Box>
            <Button
              asChild
              size="lg"
              bg="white"
              color="brand.700"
              borderRadius="full"
              px={7}
              flexShrink={0}
              display="inline-flex"
              gap={2}
              _hover={{ textDecoration: "none", bg: "brand.50" }}
              _active={{ bg: "brand.100" }}
            >
              <a href="#contact">
                {t("Cta button")}
                <ArrowRightIcon width={18} height={18} />
              </a>
            </Button>
          </Flex>
        </Reveal>
      </Container>
    </Box>
  );
};

export default Services;
