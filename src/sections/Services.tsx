import * as React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import {
  ArrowRightIcon,
  CodeIcon,
  CpuIcon,
  MonitorIcon,
} from "../components/Icons";

const SERVICES = [
  {
    tag: "GENERATOR",
    title: "ServiceGeneratorTitle",
    description: "ServiceGeneratorDesc",
    icon: CodeIcon,
    href: "#platform",
  },
  {
    tag: "SOFTWARE",
    title: "ServiceSoftwareTitle",
    description: "ServiceSoftwareDesc",
    icon: MonitorIcon,
    href: "#platform",
  },
  {
    tag: "PLC",
    title: "ServicePlcTitle",
    description: "ServicePlcDesc",
    icon: CpuIcon,
    href: "#contact",
  },
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
          {SERVICES.map(
            ({ tag, title, description, icon: ServiceIcon, href }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <Flex
                  asChild
                  h="100%"
                  direction="column"
                  bg="white"
                  borderWidth="1px"
                  borderColor="ink.200"
                  borderRadius="xl"
                  boxShadow="card"
                  p={{ base: 6, md: 7 }}
                  transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "cardHover",
                    borderColor: "steel.300",
                    textDecoration: "none",
                  }}
                >
                  <a href={href}>
                    <Flex justify="space-between" align="flex-start" mb={6}>
                      <Flex
                        align="center"
                        justify="center"
                        boxSize="12"
                        borderRadius="md"
                        bg="ink.900"
                        color="accent.300"
                      >
                        <ServiceIcon width={24} height={24} />
                      </Flex>
                      <Text
                        fontFamily="mono"
                        fontSize="10px"
                        fontWeight={700}
                        letterSpacing="0.14em"
                        color="ink.400"
                      >
                        0{index + 1}
                      </Text>
                    </Flex>

                    <Text
                      fontFamily="mono"
                      fontSize="10px"
                      fontWeight={700}
                      letterSpacing="0.14em"
                      textTransform="uppercase"
                      color="accent.600"
                      mb={2}
                    >
                      {tag}
                    </Text>
                    <Heading as="h3" size="md" mb={2}>
                      {t(title)}
                    </Heading>
                    <Text color="ink.600" fontSize="sm" lineHeight="tall">
                      {t(description)}
                    </Text>

                    <Flex
                      align="center"
                      gap={2}
                      mt="auto"
                      pt={5}
                      fontSize="sm"
                      fontWeight={600}
                      color="ink.800"
                    >
                      {t("Services card link")}
                      <ArrowRightIcon width={15} height={15} />
                    </Flex>
                  </a>
                </Flex>
              </Reveal>
            )
          )}
        </Grid>

        <Reveal delay={0.1}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            mt={{ base: 8, md: 12 }}
            p={{ base: 7, md: 9 }}
            borderRadius="xl"
            bg="#0b1520"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              h="2px"
              bg="linear-gradient(90deg, transparent, #f7a83a, transparent)"
              pointerEvents="none"
            />
            <Box
              position="absolute"
              right="-8rem"
              top="-8rem"
              boxSize="18rem"
              borderRadius="full"
              bg="radial-gradient(circle, rgba(245,168,58,0.16), transparent 68%)"
              pointerEvents="none"
            />
            <Box maxW="2xl" mb={{ base: 5, md: 0 }} position="relative">
              <Heading as="h3" size="lg" color="white" mb={2}>
                {t("Cta title")}
              </Heading>
              <Text color="whiteAlpha.700" lineHeight="tall">
                {t("Cta description")}
              </Text>
            </Box>
            <Button
              asChild
              size="lg"
              bg="accent.500"
              color="ink.900"
              borderRadius="md"
              px={7}
              flexShrink={0}
              display="inline-flex"
              gap={2}
              fontWeight={700}
              position="relative"
              _hover={{ textDecoration: "none", bg: "accent.400" }}
              _active={{ bg: "accent.600" }}
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
