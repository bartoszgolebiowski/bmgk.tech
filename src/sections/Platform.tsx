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

import Reveal from "../components/Reveal";
import {
  ArrowRightIcon,
  CodeIcon,
  ExternalLinkIcon,
  ImportIcon,
  LayersIcon,
  SlidersIcon,
  SparklesIcon,
} from "../components/Icons";
import { VASS6_DOCS_URL } from "../utils/links";

const TOOLS = [
  {
    icon: CodeIcon,
    title: "Platform tool1 title",
    description: "Platform tool1 description",
    status: "Platform status live",
    tone: "live" as const,
  },
  {
    icon: LayersIcon,
    title: "Platform tool2 title",
    description: "Platform tool2 description",
    status: "Platform status library",
    tone: "neutral" as const,
  },
  {
    icon: ImportIcon,
    title: "Platform tool3 title",
    description: "Platform tool3 description",
    status: "Platform status soon",
    tone: "neutral" as const,
  },
  {
    icon: SlidersIcon,
    title: "Platform tool4 title",
    description: "Platform tool4 description",
    status: "Platform status request",
    tone: "neutral" as const,
  },
  {
    icon: SparklesIcon,
    title: "Platform tool5 title",
    description: "Platform tool5 description",
    status: "Platform status development",
    tone: "premium" as const,
  },
];

const statusStyles = {
  live: {
    bg: "rgba(67,160,71,0.14)",
    borderColor: "rgba(129,199,132,0.32)",
    color: "brand.200",
    dot: "brand.400",
  },
  neutral: {
    bg: "whiteAlpha.100",
    borderColor: "whiteAlpha.300",
    color: "whiteAlpha.700",
    dot: "whiteAlpha.500",
  },
  premium: {
    bg: "rgba(245,168,58,0.12)",
    borderColor: "rgba(245,168,58,0.35)",
    color: "accent.300",
    dot: "accent.400",
  },
};

const Platform = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="section"
      id="platform"
      position="relative"
      overflow="hidden"
      bg="#0b1520"
      color="white"
      py={{ base: 16, md: 24 }}
    >
      <Box
        position="absolute"
        inset={0}
        opacity={0.35}
        pointerEvents="none"
        css={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.10) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.9), transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.9), transparent 85%)",
        }}
      />
      <Box
        position="absolute"
        top="-16rem"
        right="-10rem"
        w="38rem"
        h="38rem"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(245,168,58,0.14), rgba(245,168,58,0) 68%)"
        pointerEvents="none"
      />

      <Container maxW="6xl" position="relative">
        <Reveal>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align={{ base: "flex-start", lg: "flex-end" }}
            justify="space-between"
            gap={8}
            mb={{ base: 10, md: 14 }}
          >
            <Box maxW="2xl">
              <Flex align="center" gap={3} mb={4}>
                <Box w="8" h="2px" bg="accent.500" />
                <Text
                  fontFamily="mono"
                  fontSize="xs"
                  fontWeight={700}
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  color="whiteAlpha.600"
                >
                  {t("Platform eyebrow")}
                </Text>
              </Flex>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                lineHeight="1.12"
                letterSpacing="-0.03em"
                color="white"
              >
                {t("Platform title")}
              </Heading>
              <Text
                mt={4}
                color="whiteAlpha.700"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
              >
                {t("Platform description")}
              </Text>
            </Box>

            <Button
              asChild
              size="lg"
              px={7}
              bg="accent.500"
              color="ink.900"
              borderRadius="md"
              display="inline-flex"
              gap={2}
              flexShrink={0}
              fontWeight={700}
              _hover={{
                textDecoration: "none",
                bg: "accent.400",
                transform: "translateY(-1px)",
              }}
            >
              <a
                href={VASS6_DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Platform cta")}
                <ExternalLinkIcon width={18} height={18} />
              </a>
            </Button>
          </Flex>
        </Reveal>

        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 0.95fr" }}
          gap={{ base: 10, lg: 12 }}
          alignItems="start"
        >
          <StackTools />

          <Reveal delay={0.08}>
            <Box>
              {/* Screenshot slot: replace the mock below with real product
                  screenshots once they are ready. The frame keeps the layout. */}
              <Box
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                borderRadius="xl"
                overflow="hidden"
                bg="#050b12"
                boxShadow="0 40px 90px -48px rgba(0,0,0,0.95)"
              >
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
                    {t("Platform preview label")}
                  </Text>
                  <Text fontFamily="mono" fontSize="10px" color="brand.300">
                    v0.x
                  </Text>
                </Flex>

                <Flex
                  borderBottomWidth="1px"
                  borderColor="whiteAlpha.200"
                  bg="whiteAlpha.50"
                  px={2}
                  pt={2}
                  gap={1}
                >
                  {[
                    "Platform preview tab1",
                    "Platform preview tab2",
                    "Platform preview tab3",
                  ].map((tab, index) => (
                    <Box
                      key={tab}
                      px={3}
                      py={2}
                      borderTopRadius="md"
                      bg={index === 0 ? "#050b12" : "transparent"}
                      borderWidth={index === 0 ? "1px" : 0}
                      borderBottomWidth={0}
                      borderColor="whiteAlpha.200"
                    >
                      <Text
                        fontFamily="mono"
                        fontSize="10px"
                        letterSpacing="0.06em"
                        textTransform="uppercase"
                        color={index === 0 ? "whiteAlpha.800" : "whiteAlpha.400"}
                      >
                        {t(tab)}
                      </Text>
                    </Box>
                  ))}
                </Flex>

                <Box p={{ base: 4, md: 5 }}>
                  <Grid
                    templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
                    gap={3}
                  >
                    {[
                      { label: "Platform preview field1", value: "Line-42" },
                      { label: "Platform preview field2", value: "VASS6" },
                      { label: "Platform preview field3", value: "TIA Portal" },
                      { label: "Platform preview field4", value: "TIA project" },
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
                          {t(field.label)}
                        </Text>
                        <Text
                          mt={1}
                          fontFamily="mono"
                          fontSize="sm"
                          color="whiteAlpha.800"
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
                    {t("Platform preview action")}
                  </Flex>

                  <Box
                    mt={3}
                    p={3}
                    borderWidth="1px"
                    borderColor="whiteAlpha.200"
                    borderRadius="md"
                    fontFamily="mono"
                    fontSize="11px"
                    lineHeight="tall"
                  >
                    {[
                      "Platform preview log1",
                      "Platform preview log2",
                      "Platform preview log3",
                    ].map((log, index) => (
                      <Flex key={log} gap={2} mb={index === 2 ? 0 : 1.5}>
                        <Text color={index === 2 ? "accent.300" : "brand.300"}>
                          {index === 2 ? "→" : "✓"}
                        </Text>
                        <Text color="whiteAlpha.600">{t(log)}</Text>
                      </Flex>
                    ))}
                  </Box>
                </Box>
              </Box>

              <Text
                mt={3}
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.06em"
                color="whiteAlpha.400"
                lineHeight="tall"
              >
                {t("Platform preview note")}
              </Text>
            </Box>
          </Reveal>
        </Grid>
      </Container>
    </Box>
  );
};

const StackTools = () => {
  const { t } = useTranslation();

  return (
    <Reveal>
      <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }} gap={3}>
        {TOOLS.map(({ icon: ToolIcon, title, description, status, tone }) => {
          const styles = statusStyles[tone];

          return (
            <Flex
              key={title}
              as="article"
              direction="column"
              p={5}
              bg="whiteAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              borderRadius="lg"
              transition="border-color .2s ease, background-color .2s ease"
              _hover={{ borderColor: "whiteAlpha.400", bg: "whiteAlpha.100" }}
            >
              <Flex justify="space-between" align="flex-start" gap={2} mb={4}>
                <Flex
                  align="center"
                  justify="center"
                  boxSize="10"
                  borderRadius="md"
                  bg={tone === "premium" ? "rgba(245,168,58,0.12)" : "ink.900"}
                  borderWidth="1px"
                  borderColor={
                    tone === "premium" ? "rgba(245,168,58,0.3)" : "whiteAlpha.200"
                  }
                  color={tone === "premium" ? "accent.300" : "brand.300"}
                >
                  <ToolIcon width={20} height={20} />
                </Flex>
                <Badge
                  display="inline-flex"
                  alignItems="center"
                  gap={1.5}
                  bg={styles.bg}
                  borderWidth="1px"
                  borderColor={styles.borderColor}
                  color={styles.color}
                  borderRadius="sm"
                  px={2}
                  py={1}
                  fontFamily="mono"
                  fontSize="9px"
                  fontWeight={700}
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  whiteSpace="nowrap"
                >
                  <Box boxSize="1" borderRadius="full" bg={styles.dot} />
                  {t(status)}
                </Badge>
              </Flex>

              <Text fontWeight={700} color="white" fontSize="sm" lineHeight="short">
                {t(title)}
              </Text>
              <Text
                mt={2}
                color="whiteAlpha.600"
                fontSize="sm"
                lineHeight="tall"
              >
                {t(description)}
              </Text>
            </Flex>
          );
        })}
      </Grid>
    </Reveal>
  );
};

export default Platform;
