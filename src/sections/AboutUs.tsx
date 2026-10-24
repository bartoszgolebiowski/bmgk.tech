import * as React from "react";
import { Box, Container, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { CheckIcon } from "../components/Icons";

const AboutUs = () => {
  const { t } = useTranslation();

  const points = [
    t("About us point1"),
    t("About us point2"),
    t("About us point3"),
  ];

  return (
    <Box
      as="section"
      id="aboutUs"
      position="relative"
      overflow="hidden"
      bg="white"
      py={{ base: 16, md: 24 }}
    >
      <Container maxW="6xl">
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          alignItems="center"
          gap={{ base: 10, lg: 16 }}
        >
          <Reveal>
            <Box position="relative">
              <Box
                position="absolute"
                top="-1rem"
                left="-1rem"
                w="60%"
                h="60%"
                borderRadius="3xl"
                bg="linear-gradient(135deg, rgba(67,160,71,0.16), rgba(67,160,71,0))"
              />
              <Box
                position="absolute"
                right="-1.5rem"
                bottom="-1.5rem"
                boxSize={{ base: "7rem", md: "10rem" }}
                borderRadius="full"
                borderWidth="1px"
                borderColor="brand.200"
                opacity={0.75}
                pointerEvents="none"
              />
              <Box
                position="absolute"
                right="-12%"
                bottom="-12%"
                w="55%"
                h="55%"
                borderRadius="full"
                bg="radial-gradient(circle, rgba(142,36,170,0.16), transparent 70%)"
                pointerEvents="none"
              />
              <Flex
                position="relative"
                overflow="hidden"
                align="center"
                justify="center"
                bg="linear-gradient(135deg, #f1f8f2, #f7f2fa)"
                borderWidth="1px"
                borderColor="ink.200"
                borderRadius="3xl"
                boxShadow="card"
                p={{ base: 4, md: 8 }}
              >
                <Box
                  position="absolute"
                  inset={0}
                  opacity={0.42}
                  pointerEvents="none"
                  css={{
                    backgroundImage:
                      "radial-gradient(rgba(27,94,32,0.14) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                    maskImage:
                      "radial-gradient(circle at 30% 30%, black, transparent 72%)",
                    WebkitMaskImage:
                      "radial-gradient(circle at 30% 30%, black, transparent 72%)",
                  }}
                />
                <img
                  src="/svg/aboutUs.svg"
                  alt={t("About us illustration alt")}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Flex>
            </Box>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading
              align="left"
              eyebrow={t("About us eyebrow")}
              title={t("About us")}
              mb={{ base: 5, md: 6 }}
            />
            <Text
              color="ink.600"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="tall"
            >
              {t("About us description")}
            </Text>

            <Stack gap={3.5} mt={8}>
              {points.map((point) => (
                <Flex key={point} align="flex-start">
                  <Flex
                    flexShrink={0}
                    align="center"
                    justify="center"
                    boxSize="6"
                    mr={3}
                    borderRadius="full"
                    bg="brand.50"
                    color="brand.700"
                  >
                    <CheckIcon width={12} height={12} />
                  </Flex>
                  <Text color="ink.800" fontWeight={500}>
                    {point}
                  </Text>
                </Flex>
              ))}
            </Stack>
          </Reveal>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
