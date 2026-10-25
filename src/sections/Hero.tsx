import * as React from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import Reveal from "../components/Reveal";
import {
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
} from "../components/Icons";
import { requestContactPrefill } from "../utils/contactPrefill";

const TECHNOLOGIES = [
  "PLC",
  "TIA Portal",
  "VASS6",
  "TIA Openness",
  ".NET",
  "C#",
];

const CONSOLE_STEPS = [
  "Hero console step1",
  "Hero console step2",
  "Hero console step3",
];

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="section"
      id="hero"
      position="relative"
      overflow="hidden"
      pt={{ base: 28, md: 36 }}
      pb={{ base: 16, md: 24 }}
      bg="#08111b"
      color="white"
    >
      {/* Blueprint grid + signal lights: industrial, not decorative. */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.5}
        pointerEvents="none"
        css={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.10) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.9), rgba(0,0,0,0.35) 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.9), rgba(0,0,0,0.35) 70%, transparent)",
        }}
      />
      <Box
        position="absolute"
        top="-18rem"
        right="-12rem"
        w="42rem"
        h="42rem"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(245,168,58,0.16), rgba(245,168,58,0) 68%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-22rem"
        left="-14rem"
        w="40rem"
        h="40rem"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(67,160,71,0.16), rgba(67,160,71,0) 68%)"
        pointerEvents="none"
      />

      <Container maxW="6xl" position="relative">
        <Grid
          templateColumns={{ base: "1fr", lg: "1.05fr 0.95fr" }}
          alignItems="center"
          gap={{ base: 14, lg: 16 }}
        >
          <Box>
            <Reveal>
              <Flex align="center" gap={3}>
                <Box
                  boxSize="2"
                  borderRadius="full"
                  bg="brand.400"
                  boxShadow="0 0 0 4px rgba(102,187,106,0.16)"
                />
                <Text
                  fontFamily="mono"
                  fontSize="xs"
                  fontWeight={700}
                  letterSpacing="0.16em"
                  textTransform="uppercase"
                  color="whiteAlpha.700"
                >
                  {t("Hero eyebrow")}
                </Text>
              </Flex>
            </Reveal>

            <Reveal delay={0.06}>
              <Heading
                as="h1"
                mt={6}
                fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
                lineHeight="1.02"
                letterSpacing="-0.035em"
              >
                {t("Hero title line1")}
                <Box
                  as="span"
                  display="block"
                  css={{
                    background:
                      "linear-gradient(92deg, #ffc266 0%, #f7a83a 55%, #e08a12 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {t("Hero title line2")}
                </Box>
              </Heading>
            </Reveal>

            <Reveal delay={0.12}>
              <Text
                mt={6}
                fontSize={{ base: "lg", md: "xl" }}
                color="whiteAlpha.800"
                maxW="xl"
                lineHeight="tall"
              >
                {t("Hero description")}
              </Text>
            </Reveal>

            <Reveal delay={0.18}>
              <Flex
                direction={{ base: "column", sm: "row" }}
                gap={3}
                mt={8}
                align={{ base: "stretch", sm: "center" }}
              >
                <Button
                  asChild
                  size="lg"
                  px={7}
                  bg="accent.500"
                  color="ink.900"
                  borderRadius="md"
                  display="inline-flex"
                  gap={2}
                  fontWeight={700}
                  _hover={{
                    textDecoration: "none",
                    bg: "accent.400",
                    transform: "translateY(-1px)",
                  }}
                >
                  <a
                    href="#contact"
                    onClick={() =>
                      requestContactPrefill(t("Hero prefill"))
                    }
                  >
                    {t("Hero cta primary")}
                    <ArrowRightIcon width={18} height={18} />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  px={7}
                  variant="outline"
                  borderColor="whiteAlpha.400"
                  color="white"
                  bg="transparent"
                  borderRadius="md"
                  _hover={{ textDecoration: "none", bg: "whiteAlpha.100" }}
                >
                  <a href="#platform">
                    {t("Hero cta secondary")}
                    <ArrowRightIcon width={18} height={18} />
                  </a>
                </Button>
              </Flex>
            </Reveal>

            <Reveal delay={0.2}>
              <Flex align="center" gap={2.5} mt={4}>
                <Box boxSize="1.5" borderRadius="full" bg="accent.400" />
                <Text
                  fontFamily="mono"
                  fontSize="11px"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  color="whiteAlpha.500"
                >
                  {t("Hero availability")}
                </Text>
              </Flex>
            </Reveal>

            <Reveal delay={0.24}>
              <Grid
                templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
                gap={3}
                mt={10}
                maxW="xl"
              >
                <Box
                  p={4}
                  bg="whiteAlpha.50"
                  borderWidth="1px"
                  borderColor="whiteAlpha.200"
                  borderRadius="lg"
                >
                  <Flex align="center" gap={2} mb={2}>
                    <Box boxSize="2" borderRadius="full" bg="brand.400" />
                    <Text
                      fontFamily="mono"
                      fontSize="10px"
                      fontWeight={700}
                      letterSpacing="0.12em"
                      textTransform="uppercase"
                      color="brand.300"
                    >
                      {t("Hero core tag")}
                    </Text>
                  </Flex>
                  <Text fontWeight={700} color="white" fontSize="sm">
                    {t("Hero core title")}
                  </Text>
                  <Text mt={1} fontSize="sm" color="whiteAlpha.600" lineHeight="tall">
                    {t("Hero core description")}
                  </Text>
                </Box>

                <Box
                  p={4}
                  bg="rgba(245,168,58,0.07)"
                  borderWidth="1px"
                  borderColor="rgba(245,168,58,0.28)"
                  borderRadius="lg"
                >
                  <Flex align="center" gap={2} mb={2}>
                    <SparklesIcon width={12} height={12} color="#ffc266" />
                    <Text
                      fontFamily="mono"
                      fontSize="10px"
                      fontWeight={700}
                      letterSpacing="0.12em"
                      textTransform="uppercase"
                      color="accent.300"
                    >
                      {t("Hero ai tag")}
                    </Text>
                  </Flex>
                  <Text fontWeight={700} color="white" fontSize="sm">
                    {t("Hero ai title")}
                  </Text>
                  <Text mt={1} fontSize="sm" color="whiteAlpha.600" lineHeight="tall">
                    {t("Hero ai description")}
                  </Text>
                </Box>
              </Grid>
            </Reveal>

            <Reveal delay={0.3}>
              <Wrap gap={2} mt={10}>
                {TECHNOLOGIES.map((technology) => (
                  <WrapItem key={technology}>
                    <Badge
                      bg="whiteAlpha.50"
                      color="whiteAlpha.700"
                      borderWidth="1px"
                      borderColor="whiteAlpha.200"
                      borderRadius="sm"
                      px={2.5}
                      py={1}
                      fontFamily="mono"
                      fontSize="10px"
                      fontWeight={600}
                      letterSpacing="0.06em"
                      textTransform="uppercase"
                    >
                      {technology}
                    </Badge>
                  </WrapItem>
                ))}
              </Wrap>
            </Reveal>
          </Box>

          <Reveal delay={0.1}>
            <Box position="relative">
              <Box
                position="absolute"
                inset="-1px"
                borderRadius="2xl"
                bg="linear-gradient(135deg, rgba(245,168,58,0.35), rgba(67,160,71,0.2), transparent 65%)"
                pointerEvents="none"
              />
              <Box
                position="relative"
                bg="#050b12"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="0 40px 90px -40px rgba(0,0,0,0.9)"
              >
                <Flex
                  align="center"
                  justify="space-between"
                  gap={4}
                  px={4}
                  py={3}
                  borderBottomWidth="1px"
                  borderColor="whiteAlpha.200"
                  bg="whiteAlpha.50"
                >
                  <Flex align="center" gap={2}>
                    <Box boxSize="2.5" borderRadius="full" bg="#ff5f56" />
                    <Box boxSize="2.5" borderRadius="full" bg="#ffbd2e" />
                    <Box boxSize="2.5" borderRadius="full" bg="#27c93f" />
                  </Flex>
                  <Text
                    fontFamily="mono"
                    fontSize="11px"
                    color="whiteAlpha.600"
                    letterSpacing="0.04em"
                  >
                    {t("Hero console title")}
                  </Text>
                  <Text
                    fontFamily="mono"
                    fontSize="10px"
                    color="brand.300"
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                  >
                    VASS6
                  </Text>
                </Flex>

                <Box p={{ base: 5, md: 6 }} fontFamily="mono" fontSize="sm">
                  <Text color="whiteAlpha.400" fontSize="xs">
                    {"// "}
                    {t("Hero console caption")}
                  </Text>

                  <Text mt={4} color="brand.300" lineHeight="tall">
                    <Box as="span" color="whiteAlpha.500">
                      $
                    </Box>{" "}
                    {t("Hero console command")}
                  </Text>

                  <Box mt={4}>
                    {CONSOLE_STEPS.map((step) => (
                      <Flex key={step} align="center" gap={2.5} mb={2.5}>
                        <CheckIcon width={13} height={13} color="#66bb6a" />
                        <Text color="whiteAlpha.700" fontSize="sm">
                          {t(step)}
                        </Text>
                      </Flex>
                    ))}
                    <Flex align="center" gap={2.5} mt={4}>
                      <ArrowRightIcon width={13} height={13} color="#ffc266" />
                      <Text color="accent.300" fontSize="sm">
                        {t("Hero console result")}
                      </Text>
                    </Flex>
                  </Box>

                  <Box
                    mt={5}
                    p={3}
                    borderRadius="md"
                    bg="whiteAlpha.50"
                    borderWidth="1px"
                    borderColor="whiteAlpha.200"
                  >
                    <Flex justify="space-between" gap={3} fontSize="11px">
                      <Text color="whiteAlpha.500" textTransform="uppercase">
                        {t("Hero console output label")}
                      </Text>
                      <Text color="whiteAlpha.800">
                        {t("Hero console output value")}
                      </Text>
                    </Flex>
                  </Box>
                </Box>

                <Flex
                  align="center"
                  justify="space-between"
                  gap={3}
                  px={4}
                  py={3}
                  borderTopWidth="1px"
                  borderColor="whiteAlpha.200"
                  bg="whiteAlpha.50"
                >
                  <Text
                    fontFamily="mono"
                    fontSize="10px"
                    letterSpacing="0.1em"
                    textTransform="uppercase"
                    color="whiteAlpha.500"
                  >
                    {t("Hero console footer")}
                  </Text>
                  <Flex align="center" gap={2}>
                    <Box boxSize="1.5" borderRadius="full" bg="brand.400" />
                    <Text
                      fontFamily="mono"
                      fontSize="10px"
                      letterSpacing="0.08em"
                      textTransform="uppercase"
                      color="brand.300"
                    >
                      {t("Hero ready badge")}
                    </Text>
                  </Flex>
                </Flex>
              </Box>

              <Flex
                display={{ base: "none", md: "flex" }}
                position="absolute"
                top="-1rem"
                right="-0.75rem"
                zIndex={1}
                align="center"
                gap={2}
                bg="#0d1a26"
                borderWidth="1px"
                borderColor="rgba(245,168,58,0.35)"
                borderRadius="md"
                px={3}
                py={2}
                boxShadow="0 18px 40px -20px rgba(0,0,0,0.8)"
              >
                <SparklesIcon width={14} height={14} color="#ffc266" />
                <Text
                  fontFamily="mono"
                  fontSize="10px"
                  fontWeight={700}
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  color="accent.300"
                >
                  {t("Hero console ai badge")}
                </Text>
              </Flex>
            </Box>
          </Reveal>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
