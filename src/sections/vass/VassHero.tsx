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
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import Reveal from "../../components/Reveal";
import {
  ArrowRightIcon,
  CodeIcon,
  ExternalLinkIcon,
  LayersIcon,
  SlidersIcon,
} from "../../components/Icons";
import { VASS_APP_URL } from "../../utils/links";

const STATS = [
  { value: "Vass stat1 value", label: "Vass stat1 label" },
  { value: "Vass stat2 value", label: "Vass stat2 label" },
  { value: "Vass stat3 value", label: "Vass stat3 label" },
];

const PIPELINE = [
  { icon: LayersIcon, label: "Import" },
  { icon: SlidersIcon, label: "Configure" },
  { icon: CodeIcon, label: "Generate" },
];

const VassHero = () => {
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
      {/* Industrial blueprint grid */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.35}
        pointerEvents="none"
        css={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.10) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.9), transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.9), transparent 85%)",
        }}
      />
      <Box
        position="absolute"
        top="-18rem"
        right="-10rem"
        w="40rem"
        h="40rem"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(76,175,80,0.16), rgba(76,175,80,0) 68%)"
        pointerEvents="none"
      />

      <Container maxW="6xl" position="relative">
        <Grid
          templateColumns={{ base: "1fr", lg: "1.05fr 0.95fr" }}
          gap={{ base: 12, lg: 16 }}
          alignItems="center"
        >
          <Reveal>
            <Box>
              <Badge
                display="inline-flex"
                alignItems="center"
                gap={2}
                bg="rgba(76,175,80,0.12)"
                borderWidth="1px"
                borderColor="rgba(129,199,132,0.28)"
                color="brand.200"
                borderRadius="full"
                px={3}
                py={1.5}
                textTransform="none"
                fontSize="xs"
                fontWeight={700}
              >
                <Box boxSize="1.5" borderRadius="full" bg="brand.300" />
                {t("Vass hero badge")}
              </Badge>

              <Heading
                as="h1"
                mt={6}
                fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
                lineHeight="1.05"
                letterSpacing="-0.03em"
                color="white"
              >
                {t("Vass title line1")}
                <Box as="span" display="block" color="brand.300">
                  {t("Vass title line2")}
                </Box>
              </Heading>

              <Text
                mt={6}
                maxW="xl"
                color="whiteAlpha.700"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
              >
                {t("Vass description")}
              </Text>

              <Flex mt={8} align="center" gap={3} wrap="wrap">
                <Button
                  asChild
                  size="lg"
                  px={7}
                  bg="brand.500"
                  color="white"
                  borderRadius="full"
                  display="inline-flex"
                  gap={2}
                  boxShadow="0 16px 34px -14px rgba(46,125,50,0.9)"
                  _hover={{
                    bg: "brand.400",
                    textDecoration: "none",
                    transform: "translateY(-1px)",
                  }}
                >
                  <a href={VASS_APP_URL} target="_blank" rel="noopener noreferrer">
                    {t("Vass cta primary")}
                    <ExternalLinkIcon width={18} height={18} />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  px={7}
                  variant="outline"
                  borderColor="whiteAlpha.300"
                  color="whiteAlpha.900"
                  bg="transparent"
                  borderRadius="full"
                  display="inline-flex"
                  gap={2}
                  _hover={{ bg: "whiteAlpha.100", textDecoration: "none" }}
                >
                  <a href="/#contact">
                    {t("Vass cta secondary")}
                    <ArrowRightIcon width={18} height={18} />
                  </a>
                </Button>
              </Flex>

              <Text mt={5} fontSize="xs" color="whiteAlpha.500">
                {t("Vass availability")}
              </Text>
              <Text mt={2} fontSize="xs" color="whiteAlpha.400">
                {t("Portal coming soon")}
              </Text>
            </Box>
          </Reveal>

          <Reveal delay={0.08}>
            <Box
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              overflow="hidden"
              bg="#050b12"
              boxShadow="0 40px 90px -48px rgba(0,0,0,0.95)"
            >
              {/* Window chrome */}
              <Flex
                align="center"
                justify="space-between"
                px={4}
                py={2.5}
                borderBottomWidth="1px"
                borderColor="whiteAlpha.200"
                bg="whiteAlpha.50"
              >
                <Flex align="center" gap={2}>
                  <Box boxSize="2" borderRadius="full" bg="#ff5f56" />
                  <Box boxSize="2" borderRadius="full" bg="#ffbd2e" />
                  <Box boxSize="2" borderRadius="full" bg="#27c93f" />
                </Flex>
                <Text
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  color="whiteAlpha.500"
                >
                  vass-plc-creator
                </Text>
                <Text fontFamily="mono" fontSize="10px" color="brand.300">
                  core
                </Text>
              </Flex>

              <Box p={{ base: 5, md: 6 }}>
                {/* Pipeline steps */}
                <Grid templateColumns="repeat(3, 1fr)" gap={2} mb={4}>
                  {PIPELINE.map(({ icon: StepIcon, label }, index) => (
                    <Box
                      key={label}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      gap={2}
                      px={2}
                      py={3}
                      borderRadius="md"
                      borderWidth="1px"
                      borderColor="whiteAlpha.200"
                      bg="whiteAlpha.50"
                    >
                      <StepIcon width={20} height={20} color="brand.300" />
                      <Text
                        fontFamily="mono"
                        fontSize="10px"
                        letterSpacing="0.06em"
                        textTransform="uppercase"
                        color="whiteAlpha.700"
                      >
                        {index + 1} · {label}
                      </Text>
                    </Box>
                  ))}
                </Grid>

                {/* Input fields */}
                <Grid
                  templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
                  gap={2}
                >
                  {[
                    { label: "EPLAN / CAEX", value: "line-42.sdf" },
                    { label: "Safety matrix", value: "safety.xlsm" },
                    { label: "SPS matrix", value: "sps.xlsx" },
                    { label: "Output", value: "line-42.s7z" },
                  ].map((field) => (
                    <Box
                      key={field.label}
                      px={3}
                      py={2.5}
                      borderWidth="1px"
                      borderColor="whiteAlpha.200"
                      borderRadius="md"
                      bg="whiteAlpha.50"
                    >
                      <Text
                        fontFamily="mono"
                        fontSize="9px"
                        letterSpacing="0.12em"
                        textTransform="uppercase"
                        color="whiteAlpha.400"
                      >
                        {field.label}
                      </Text>
                      <Text
                        mt={1}
                        fontFamily="mono"
                        fontSize="sm"
                        color="whiteAlpha.800"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                      >
                        {field.value}
                      </Text>
                    </Box>
                  ))}
                </Grid>

                <Flex
                  align="center"
                  justify="center"
                  gap={2}
                  mt={3}
                  py={2.5}
                  borderRadius="md"
                  bg="accent.500"
                  color="ink.900"
                  fontFamily="mono"
                  fontSize="11px"
                  fontWeight={700}
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                >
                  <ArrowRightIcon width={13} height={13} />
                  Generate project
                </Flex>

                {[
                  { mark: "✓", text: "structure parsed", tone: "brand.300" },
                  { mark: "✓", text: "LAD logic generated", tone: "brand.300" },
                  { mark: "→", text: "ready for TIA Portal", tone: "accent.300" },
                ].map((log) => (
                  <Flex key={log.text} gap={2} mt={2}>
                    <Text color={log.tone} fontFamily="mono" fontSize="11px">
                      {log.mark}
                    </Text>
                    <Text fontFamily="mono" fontSize="11px" color="whiteAlpha.600">
                      {log.text}
                    </Text>
                  </Flex>
                ))}
              </Box>
            </Box>
          </Reveal>
        </Grid>

        <Reveal delay={0.12}>
          <Grid
            templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }}
            gap={4}
            mt={{ base: 12, md: 16 }}
          >
            {STATS.map(({ value, label }) => (
              <Box
                key={value}
                px={5}
                py={4}
                borderRadius="xl"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                bg="whiteAlpha.50"
              >
                <Text
                  fontFamily="mono"
                  fontSize="xl"
                  fontWeight={700}
                  color="brand.300"
                >
                  {t(value)}
                </Text>
                <Text
                  mt={1}
                  fontSize="xs"
                  letterSpacing="0.06em"
                  textTransform="uppercase"
                  color="whiteAlpha.500"
                >
                  {t(label)}
                </Text>
              </Box>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Box>
  );
};

export default VassHero;