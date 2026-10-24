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
import { ArrowRightIcon, CheckIcon } from "../components/Icons";
import useNumberCarousel from "../utils/hooks/useNumberCarousel";

const TECHNOLOGIES = ["PLC", "TIA Portal", "VASS6", ".NET", "C#"];

const Hero = () => {
  const { t } = useTranslation();
  const [current] = useNumberCarousel(3);

  return (
    <Box
      as="section"
      id="hero"
      position="relative"
      overflow="hidden"
      pt={{ base: 28, md: 36 }}
      pb={{ base: 16, md: 24 }}
      bg="linear-gradient(180deg, #eef7ef 0%, #f8faf9 55%, #f8faf9 100%)"
    >
      {/* Decorative background glows */}
      <Box
        position="absolute"
        top="-14rem"
        right="-10rem"
        w="34rem"
        h="34rem"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(67,160,71,0.20), rgba(67,160,71,0) 70%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-18rem"
        left="-12rem"
        w="30rem"
        h="30rem"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(142,36,170,0.14), rgba(142,36,170,0) 70%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        inset={0}
        opacity={0.38}
        pointerEvents="none"
        css={{
          backgroundImage:
            "radial-gradient(rgba(27,94,32,0.16) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.8), transparent 72%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.8), transparent 72%)",
        }}
      />

      <Container maxW="6xl" position="relative">
        <Grid
          templateColumns={{ base: "1fr", lg: "1.05fr 0.95fr" }}
          alignItems="center"
          gap={{ base: 12, lg: 16 }}
        >
          <Box>
            <Reveal>
              <Badge
                bg="white"
                color="brand.700"
                borderWidth="1px"
                borderColor="brand.100"
                borderRadius="full"
                px={3}
                py={1.5}
                fontSize="xs"
                fontWeight={700}
                letterSpacing="0.06em"
                textTransform="uppercase"
                boxShadow="0 1px 2px rgba(15,23,42,0.05)"
              >
                {t("Hero badge")}
              </Badge>
            </Reveal>

            <Reveal delay={0.06}>
              <Heading
                as="h1"
                mt={6}
                fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
                lineHeight="1.05"
              >
                {t("Welcome")}
                <Box
                  as="span"
                  key={current}
                  display="block"
                  className="rotating-text"
                  css={{
                    background:
                      "linear-gradient(92deg, #2e7d32 0%, #43a047 45%, #8e24aa 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {t(`Welcome${current}`)}
                </Box>
              </Heading>
            </Reveal>

            <Reveal delay={0.12}>
              <Text
                mt={6}
                fontSize={{ base: "lg", md: "xl" }}
                color="ink.600"
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
                  bg="brand.600"
                  color="white"
                  borderRadius="full"
                  display="inline-flex"
                  gap={2}
                  _hover={{
                    textDecoration: "none",
                    bg: "brand.700",
                    transform: "translateY(-1px)",
                  }}
                >
                  <a href="#contact">
                    {t("Hero cta primary")}
                    <ArrowRightIcon width={18} height={18} />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  px={7}
                  variant="outline"
                  borderColor="brand.300"
                  color="brand.700"
                  bg="white"
                  borderRadius="full"
                  _hover={{ textDecoration: "none", bg: "brand.50" }}
                >
                  <a href="#products">{t("Hero cta secondary")}</a>
                </Button>
              </Flex>
            </Reveal>

            <Reveal delay={0.24}>
              <Box mt={10}>
                <Text
                  fontSize="xs"
                  fontWeight={700}
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  color="ink.500"
                  mb={3}
                >
                  {t("Technologies")}
                </Text>
                <Wrap gap={2}>
                  {TECHNOLOGIES.map((technology) => (
                    <WrapItem key={technology}>
                      <Badge
                        bg="white"
                        color="ink.700"
                        borderWidth="1px"
                        borderColor="ink.200"
                        borderRadius="full"
                        px={3}
                        py={1}
                        fontSize="xs"
                        fontWeight={600}
                        textTransform="none"
                      >
                        {technology}
                      </Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </Reveal>
          </Box>

          <Reveal delay={0.1}>
            <Box position="relative">
              <Box
                position="absolute"
                top="-1rem"
                right="-1rem"
                w="70%"
                h="70%"
                borderRadius="3xl"
                bg="linear-gradient(135deg, rgba(67,160,71,0.18), rgba(142,36,170,0.18))"
                transform="rotate(4deg)"
              />
              <Box
                position="relative"
                bg="white"
                borderWidth="1px"
                borderColor="ink.200"
                borderRadius="3xl"
                boxShadow="card"
                p={{ base: 5, md: 8 }}
              >
                <img
                  src="/svg/factoryHome.svg"
                  alt={t("Hero illustration alt")}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </Box>
              <Flex
                display={{ base: "none", md: "flex" }}
                position="absolute"
                top="-1rem"
                right="-1rem"
                zIndex={1}
                align="center"
                gap={2}
                bg="ink.900"
                color="white"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                borderRadius="full"
                px={4}
                py={2.5}
                boxShadow="0 18px 40px -20px rgba(15,23,42,0.65)"
              >
                <Flex
                  align="center"
                  justify="center"
                  boxSize="5"
                  borderRadius="full"
                  bg="brand.500"
                >
                  <CheckIcon width={11} height={11} />
                </Flex>
                <Text fontSize="xs" fontWeight={700} letterSpacing="0.03em">
                  {t("Hero ready badge")}
                </Text>
              </Flex>
              <Flex
                display={{ base: "none", md: "flex" }}
                position="absolute"
                bottom="-1.25rem"
                left="-1.25rem"
                align="center"
                bg="white"
                borderWidth="1px"
                borderColor="ink.200"
                borderRadius="xl"
                boxShadow="card"
                px={4}
                py={3}
              >
                <Flex
                  align="center"
                  justify="center"
                  boxSize="8"
                  borderRadius="full"
                  bg="brand.50"
                  color="brand.700"
                  mr={3}
                  fontWeight={700}
                  fontSize="sm"
                >
                  {"</>"}
                </Flex>
                <Box>
                  <Text fontSize="sm" fontWeight={700} color="ink.900">
                    {t("Hero card title")}
                  </Text>
                  <Text fontSize="xs" color="ink.500">
                    {t("Hero card subtitle")}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Reveal>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
