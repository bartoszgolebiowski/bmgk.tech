import * as React from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import Reveal from "../components/Reveal";
import {
  ArchiveIcon,
  CheckIcon,
  CodeIcon,
  DownloadIcon,
  ExternalLinkIcon,
  ImportIcon,
  SlidersIcon,
  SparklesIcon,
  UploadIcon,
} from "../components/Icons";

const VASS6_URL = "https://vass6plccreator.bmgk.tech/";

const STEPS = [
  {
    title: "Download step1 title",
    description: "Download step1 description",
    icon: UploadIcon,
  },
  {
    title: "Download step2 title",
    description: "Download step2 description",
    icon: SlidersIcon,
  },
  {
    title: "Download step3 title",
    description: "Download step3 description",
    icon: CodeIcon,
  },
  {
    title: "Download step4 title",
    description: "Download step4 description",
    icon: ArchiveIcon,
  },
];

const cardStyles = {
  position: "relative" as const,
  overflow: "hidden" as const,
  p: { base: 6, md: 8 },
  borderRadius: "3xl",
  borderWidth: "1px",
  borderColor: "whiteAlpha.200",
  bg: "linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.035))",
  boxShadow: "0 24px 80px -48px rgba(0,0,0,0.9)",
  transition: "transform .2s ease, border-color .2s ease, box-shadow .2s ease",
  _hover: {
    transform: "translateY(-4px)",
    borderColor: "whiteAlpha.300",
    boxShadow: "0 32px 90px -48px rgba(0,0,0,1)",
  },
};

const Downloads = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="section"
      id="downloads"
      position="relative"
      overflow="hidden"
      bg="ink.900"
      color="white"
      py={{ base: 16, md: 24 }}
    >
      {/* Ambient light + fine grid keep the dark section from feeling flat. */}
      <Box
        position="absolute"
        top="-16rem"
        left="-10rem"
        w="38rem"
        h="38rem"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(76,175,80,0.22), rgba(76,175,80,0) 68%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-22rem"
        right="-12rem"
        w="42rem"
        h="42rem"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(142,36,170,0.20), rgba(142,36,170,0) 68%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        inset={0}
        opacity={0.32}
        pointerEvents="none"
        css={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.9), transparent 78%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.9), transparent 78%)",
        }}
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
              <Text
                as="span"
                display="inline-block"
                px={3}
                py={1}
                borderRadius="full"
                bg="rgba(76,175,80,0.12)"
                borderWidth="1px"
                borderColor="rgba(129,199,132,0.25)"
                color="brand.200"
                fontSize="xs"
                fontWeight={700}
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                {t("Downloads eyebrow")}
              </Text>
              <Heading
                as="h2"
                mt={4}
                fontSize={{ base: "3xl", md: "4xl" }}
                lineHeight="1.15"
                color="white"
              >
                {t("Downloads title")}
              </Heading>
              <Text
                mt={4}
                color="whiteAlpha.700"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
              >
                {t("Downloads description")}
              </Text>
            </Box>

            <Flex
              align="center"
              gap={3}
              px={4}
              py={3}
              borderRadius="2xl"
              bg="whiteAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              maxW={{ base: "full", lg: "xs" }}
            >
              <Flex
                flexShrink={0}
                align="center"
                justify="center"
                boxSize="10"
                borderRadius="xl"
                bg="rgba(76,175,80,0.14)"
                color="brand.300"
              >
                <SparklesIcon width={20} height={20} />
              </Flex>
              <Box>
                <Text
                  fontSize="xs"
                  fontWeight={700}
                  letterSpacing="0.06em"
                  textTransform="uppercase"
                  color="whiteAlpha.500"
                >
                  VASS6
                </Text>
                <Text fontSize="sm" color="whiteAlpha.900" lineHeight="short">
                  {t("Download tutorial coming")}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Reveal>

        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap={6}
          alignItems="stretch"
        >
          <Reveal>
            <Box as="article" {...cardStyles} h="100%">
              <Box
                position="absolute"
                top="-6rem"
                right="-6rem"
                boxSize="16rem"
                borderRadius="full"
                bg="radial-gradient(circle, rgba(76,175,80,0.26), transparent 68%)"
                pointerEvents="none"
              />

              <Flex
                position="relative"
                justify="space-between"
                align="flex-start"
                gap={4}
              >
                <Flex
                  align="center"
                  justify="center"
                  boxSize="14"
                  borderRadius="2xl"
                  bg="brand.500"
                  color="white"
                  boxShadow="0 16px 34px -14px rgba(46,125,50,0.9)"
                >
                  <CodeIcon width={27} height={27} />
                </Flex>
                <Badge
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  bg="rgba(76,175,80,0.14)"
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
                  {t("Download VASS6 badge")}
                </Badge>
              </Flex>

              <Heading as="h3" size="lg" mt={6} color="white">
                {t("Download VASS6 title")}
              </Heading>
              <Text mt={3} color="whiteAlpha.700" lineHeight="tall">
                {t("Download VASS6 description")}
              </Text>

              <Stack gap={2.5} mt={6}>
                {[
                  t("Download VASS6 bullet1"),
                  t("Download VASS6 bullet2"),
                  t("Download VASS6 bullet3"),
                ].map((item) => (
                  <Flex key={item} align="flex-start">
                    <Flex
                      flexShrink={0}
                      align="center"
                      justify="center"
                      boxSize="5"
                      mt="1px"
                      mr={3}
                      borderRadius="full"
                      bg="rgba(76,175,80,0.16)"
                      color="brand.300"
                    >
                      <CheckIcon width={11} height={11} />
                    </Flex>
                    <Text fontSize="sm" color="whiteAlpha.800">
                      {item}
                    </Text>
                  </Flex>
                ))}
              </Stack>

              <Button
                asChild
                mt={8}
                px={6}
                bg="brand.500"
                color="white"
                borderRadius="full"
                display="inline-flex"
                gap={2}
                _hover={{
                  bg: "brand.400",
                  textDecoration: "none",
                  transform: "translateY(-1px)",
                }}
              >
                <a href={VASS6_URL} target="_blank" rel="noopener noreferrer">
                  {t("Download VASS6 cta")}
                  <ExternalLinkIcon width={16} height={16} />
                </a>
              </Button>
            </Box>
          </Reveal>

          <Reveal delay={0.08}>
            <Box as="article" {...cardStyles} h="100%">
              <Box
                position="absolute"
                top="-6rem"
                right="-6rem"
                boxSize="16rem"
                borderRadius="full"
                bg="radial-gradient(circle, rgba(142,36,170,0.24), transparent 68%)"
                pointerEvents="none"
              />

              <Flex
                position="relative"
                justify="space-between"
                align="flex-start"
                gap={4}
              >
                <Flex
                  align="center"
                  justify="center"
                  boxSize="14"
                  borderRadius="2xl"
                  bg="rgba(142,36,170,0.22)"
                  borderWidth="1px"
                  borderColor="rgba(186,104,200,0.35)"
                  color="accent.200"
                >
                  <ImportIcon width={26} height={26} />
                </Flex>
                <Badge
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  bg="rgba(142,36,170,0.16)"
                  borderWidth="1px"
                  borderColor="rgba(186,104,200,0.3)"
                  color="accent.200"
                  borderRadius="full"
                  px={3}
                  py={1.5}
                  textTransform="none"
                  fontSize="xs"
                  fontWeight={700}
                >
                  <Box boxSize="1.5" borderRadius="full" bg="accent.300" />
                  {t("Download importer badge")}
                </Badge>
              </Flex>

              <Heading as="h3" size="lg" mt={6} color="white">
                {t("Download importer title")}
              </Heading>
              <Text mt={3} color="whiteAlpha.700" lineHeight="tall">
                {t("Download importer description")}
              </Text>

              <Stack gap={2.5} mt={6}>
                {[
                  t("Download importer bullet1"),
                  t("Download importer bullet2"),
                  t("Download importer bullet3"),
                ].map((item) => (
                  <Flex key={item} align="flex-start">
                    <Flex
                      flexShrink={0}
                      align="center"
                      justify="center"
                      boxSize="5"
                      mt="1px"
                      mr={3}
                      borderRadius="full"
                      bg="rgba(142,36,170,0.18)"
                      color="accent.200"
                    >
                      <CheckIcon width={11} height={11} />
                    </Flex>
                    <Text fontSize="sm" color="whiteAlpha.800">
                      {item}
                    </Text>
                  </Flex>
                ))}
              </Stack>

              <Flex mt={8} align="center" gap={3} wrap="wrap">
                <Button
                  disabled
                  px={6}
                  bg="whiteAlpha.100"
                  color="whiteAlpha.500"
                  borderWidth="1px"
                  borderColor="whiteAlpha.200"
                  borderRadius="full"
                  display="inline-flex"
                  gap={2}
                  cursor="not-allowed"
                  _hover={{}}
                  _disabled={{ opacity: 1, cursor: "not-allowed" }}
                >
                  <DownloadIcon width={16} height={16} />
                  {t("Download importer cta")}
                </Button>
                <Text fontSize="xs" color="whiteAlpha.500">
                  {t("Download importer note")}
                </Text>
              </Flex>
            </Box>
          </Reveal>
        </Grid>

        <Reveal delay={0.1}>
          <Box
            mt={{ base: 12, md: 16 }}
            p={{ base: 6, md: 8 }}
            borderRadius="3xl"
            borderWidth="1px"
            borderColor="whiteAlpha.200"
            bg="linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))"
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align={{ base: "flex-start", md: "flex-end" }}
              justify="space-between"
              gap={4}
            >
              <Box maxW="2xl">
                <Text
                  fontSize="xs"
                  fontWeight={700}
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  color="brand.300"
                >
                  {t("Downloads workflow eyebrow")}
                </Text>
                <Heading
                  as="h3"
                  mt={2}
                  fontSize={{ base: "xl", md: "2xl" }}
                  color="white"
                  lineHeight="1.25"
                >
                  {t("Downloads workflow title")}
                </Heading>
              </Box>
              <Badge
                alignSelf={{ base: "flex-start", md: "center" }}
                bg="whiteAlpha.100"
                color="whiteAlpha.700"
                borderRadius="full"
                px={3}
                py={1.5}
                textTransform="none"
                fontSize="xs"
                fontWeight={600}
              >
                {t("Download tutorial coming")}
              </Badge>
            </Flex>

            <Grid
              templateColumns={{
                base: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={4}
              mt={8}
            >
              {STEPS.map(({ title, description, icon: StepIcon }, index) => (
                <Box
                  key={title}
                  position="relative"
                  p={5}
                  borderRadius="2xl"
                  bg="rgba(11,18,32,0.72)"
                  borderWidth="1px"
                  borderColor="whiteAlpha.200"
                >
                  <Flex align="center" justify="space-between" mb={5}>
                    <Flex
                      align="center"
                      justify="center"
                      boxSize="11"
                      borderRadius="xl"
                      bg="rgba(76,175,80,0.14)"
                      color="brand.300"
                    >
                      <StepIcon width={21} height={21} />
                    </Flex>
                    <Text
                      fontSize="xs"
                      fontWeight={800}
                      letterSpacing="0.08em"
                      color="whiteAlpha.400"
                    >
                      0{index + 1}
                    </Text>
                  </Flex>
                  <Heading as="h4" size="sm" color="white">
                    {t(title)}
                  </Heading>
                  <Text mt={2} fontSize="sm" color="whiteAlpha.600" lineHeight="tall">
                    {t(description)}
                  </Text>
                </Box>
              ))}
            </Grid>

            <Flex
              mt={6}
              align="flex-start"
              gap={3}
              p={4}
              borderRadius="xl"
              bg="rgba(76,175,80,0.10)"
              borderWidth="1px"
              borderColor="rgba(129,199,132,0.24)"
            >
              <Flex
                flexShrink={0}
                align="center"
                justify="center"
                boxSize="7"
                borderRadius="lg"
                bg="rgba(76,175,80,0.16)"
                color="brand.300"
              >
                <ImportIcon width={16} height={16} />
              </Flex>
              <Text fontSize="sm" color="whiteAlpha.800" lineHeight="tall">
                {t("Download workflow note")}
              </Text>
            </Flex>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
};

export default Downloads;
