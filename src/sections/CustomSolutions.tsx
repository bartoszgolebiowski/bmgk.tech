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
  ArrowRightIcon,
  CheckIcon,
  LayersIcon,
  SparklesIcon,
} from "../components/Icons";
import { requestContactPrefill } from "../utils/contactPrefill";

const CustomSolutions = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="section"
      id="custom"
      position="relative"
      overflow="hidden"
      bg="linear-gradient(180deg, #ffffff 0%, #eef1f3 100%)"
      py={{ base: 16, md: 24 }}
    >
      <Box
        position="absolute"
        top="-14rem"
        right="-10rem"
        w="32rem"
        h="32rem"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(67,160,71,0.16), rgba(67,160,71,0) 70%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-16rem"
        left="-10rem"
        w="30rem"
        h="30rem"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(81,105,127,0.16), rgba(81,105,127,0) 70%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        inset={0}
        opacity={0.32}
        pointerEvents="none"
        css={{
          backgroundImage:
            "radial-gradient(rgba(27,94,32,0.14) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.65), transparent 72%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.65), transparent 72%)",
        }}
      />

      <Container maxW="6xl" position="relative">
        <Reveal>
          <Box maxW="3xl" mb={{ base: 10, md: 14 }}>
            <Text
              as="span"
              display="inline-block"
              px={3}
              py={1}
              borderRadius="full"
              bg="brand.50"
              color="brand.700"
              fontSize="xs"
              fontWeight={700}
              letterSpacing="0.08em"
              textTransform="uppercase"
            >
              {t("Custom eyebrow")}
            </Text>
            <Heading
              as="h2"
              mt={4}
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight="1.15"
            >
              {t("Custom title")}
            </Heading>
            <Text
              mt={4}
              color="ink.600"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="tall"
            >
              {t("Custom description")}
            </Text>
          </Box>
        </Reveal>

        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1.05fr" }}
          gap={6}
          alignItems="stretch"
        >
          <Reveal>
            <Box
              as="article"
              position="relative"
              overflow="hidden"
              h="100%"
              p={{ base: 6, md: 8 }}
              bg="white"
              borderWidth="1px"
              borderColor="ink.200"
              borderRadius="3xl"
              boxShadow="card"
              _hover={{ borderColor: "brand.200", boxShadow: "cardHover" }}
              transition="border-color .2s ease, box-shadow .2s ease"
            >
              <Box
                position="absolute"
                top="-6rem"
                right="-6rem"
                boxSize="16rem"
                borderRadius="full"
                bg="radial-gradient(circle, rgba(67,160,71,0.16), transparent 68%)"
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
                  bg="brand.50"
                  borderWidth="1px"
                  borderColor="brand.100"
                  color="brand.700"
                >
                  <LayersIcon width={26} height={26} />
                </Flex>
                <Badge
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  bg="brand.50"
                  borderWidth="1px"
                  borderColor="brand.100"
                  color="brand.700"
                  borderRadius="full"
                  px={3}
                  py={1.5}
                  textTransform="none"
                  fontSize="xs"
                  fontWeight={700}
                >
                  <Box boxSize="1.5" borderRadius="full" bg="brand.500" />
                  {t("Custom card1 badge")}
                </Badge>
              </Flex>

              <Heading as="h3" size="lg" mt={6}>
                {t("Custom card1 title")}
              </Heading>
              <Text mt={3} color="ink.600" lineHeight="tall">
                {t("Custom card1 description")}
              </Text>

              <Stack gap={2.5} mt={6}>
                {[
                  t("Custom card1 bullet1"),
                  t("Custom card1 bullet2"),
                  t("Custom card1 bullet3"),
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
                      bg="brand.50"
                      color="brand.700"
                    >
                      <CheckIcon width={11} height={11} />
                    </Flex>
                    <Text fontSize="sm" color="ink.700">
                      {item}
                    </Text>
                  </Flex>
                ))}
              </Stack>

              <Button
                asChild
                mt={8}
                px={6}
                bg="brand.600"
                color="white"
                borderRadius="full"
                display="inline-flex"
                gap={2}
                _hover={{
                  bg: "brand.500",
                  textDecoration: "none",
                  transform: "translateY(-1px)",
                }}
              >
                <a
                  href="#contact"
                  onClick={() => requestContactPrefill(t("Custom card1 prefill"))}
                >
                  {t("Custom card1 cta")}
                  <ArrowRightIcon width={16} height={16} />
                </a>
              </Button>
            </Box>
          </Reveal>

          <Reveal delay={0.08}>
            <Box
              as="article"
              position="relative"
              overflow="hidden"
              h="100%"
              p={{ base: 6, md: 8 }}
              bg="linear-gradient(150deg, #1b1230 0%, #0b1220 62%, #0d2217 100%)"
              borderWidth="1px"
              borderColor="rgba(246,196,83,0.3)"
              borderRadius="3xl"
              color="white"
              boxShadow="0 28px 80px -42px rgba(11,18,32,0.85)"
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                h="2px"
                bg="linear-gradient(90deg, transparent, #f6c453, transparent)"
                pointerEvents="none"
              />
              <Box
                position="absolute"
                top="-6rem"
                right="-6rem"
                boxSize="18rem"
                borderRadius="full"
                bg="radial-gradient(circle, rgba(246,196,83,0.18), transparent 68%)"
                pointerEvents="none"
              />
              <Box
                position="absolute"
                bottom="-8rem"
                left="-6rem"
                boxSize="16rem"
                borderRadius="full"
                bg="radial-gradient(circle, rgba(81,105,127,0.30), transparent 70%)"
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
                  bg="rgba(246,196,83,0.12)"
                  borderWidth="1px"
                  borderColor="rgba(246,196,83,0.32)"
                  color="#f6c453"
                >
                  <SparklesIcon width={26} height={26} />
                </Flex>
                <Badge
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  bg="rgba(246,196,83,0.12)"
                  borderWidth="1px"
                  borderColor="rgba(246,196,83,0.35)"
                  color="#f6c453"
                  borderRadius="full"
                  px={3}
                  py={1.5}
                  textTransform="none"
                  fontSize="xs"
                  fontWeight={700}
                >
                  <Box boxSize="1.5" borderRadius="full" bg="#f6c453" />
                  {t("Custom card2 badge")}
                </Badge>
              </Flex>

              <Heading as="h3" size="lg" mt={6} color="white">
                {t("Custom card2 title")}
              </Heading>
              <Text mt={3} color="whiteAlpha.700" lineHeight="tall">
                {t("Custom card2 description")}
              </Text>

              <Stack gap={2.5} mt={6}>
                {[
                  t("Custom card2 bullet1"),
                  t("Custom card2 bullet2"),
                  t("Custom card2 bullet3"),
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
                      bg="rgba(246,196,83,0.12)"
                      color="#f6c453"
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
                bg="#f6c453"
                color="ink.900"
                borderRadius="full"
                display="inline-flex"
                gap={2}
                _hover={{
                  bg: "#ffd778",
                  textDecoration: "none",
                  transform: "translateY(-1px)",
                }}
              >
                <a
                  href="#contact"
                  onClick={() => requestContactPrefill(t("Custom card2 prefill"))}
                >
                  {t("Custom card2 cta")}
                  <ArrowRightIcon width={16} height={16} />
                </a>
              </Button>

              <Text mt={4} fontSize="xs" color="whiteAlpha.500" lineHeight="tall">
                {t("Custom footnote")}
              </Text>
            </Box>
          </Reveal>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomSolutions;
