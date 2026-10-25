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
                    borderRadius="sm"
                    bg="accent.50"
                    borderWidth="1px"
                    borderColor="accent.200"
                    color="accent.700"
                  >
                    <CheckIcon width={12} height={12} />
                  </Flex>
                  <Text color="ink.800" fontWeight={500}>
                    {point}
                  </Text>
                </Flex>
              ))}
            </Stack>

            <Flex
              mt={8}
              borderTopWidth="1px"
              borderColor="ink.200"
              pt={5}
              gap={8}
              wrap="wrap"
            >
              {[
                { value: "VASS6", label: t("About us stat1") },
                { value: "TIA", label: t("About us stat2") },
                { value: ".NET", label: t("About us stat3") },
              ].map((stat) => (
                <Box key={stat.value}>
                  <Text
                    fontFamily="mono"
                    fontSize="lg"
                    fontWeight={700}
                    color="ink.900"
                    letterSpacing="-0.02em"
                  >
                    {stat.value}
                  </Text>
                  <Text
                    mt={1}
                    fontFamily="mono"
                    fontSize="10px"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    color="ink.500"
                  >
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Reveal>

          <Reveal delay={0.08}>
            <Box position="relative">
              <Box
                position="absolute"
                top="-0.75rem"
                left="-0.75rem"
                w="4rem"
                h="4rem"
                borderTopWidth="2px"
                borderLeftWidth="2px"
                borderColor="accent.400"
                pointerEvents="none"
              />
              <Box
                position="absolute"
                bottom="-0.75rem"
                right="-0.75rem"
                w="4rem"
                h="4rem"
                borderBottomWidth="2px"
                borderRightWidth="2px"
                borderColor="brand.400"
                pointerEvents="none"
              />

              <Box
                position="relative"
                overflow="hidden"
                borderWidth="1px"
                borderColor="ink.200"
                borderRadius="xl"
                bg="steel.50"
                boxShadow="card"
              >
                <Flex
                  align="center"
                  justify="space-between"
                  px={4}
                  py={2.5}
                  borderBottomWidth="1px"
                  borderColor="ink.200"
                  bg="white"
                >
                  <Flex align="center" gap={2}>
                    <Box boxSize="1.5" borderRadius="full" bg="brand.500" />
                    <Text
                      fontFamily="mono"
                      fontSize="10px"
                      fontWeight={700}
                      letterSpacing="0.12em"
                      textTransform="uppercase"
                      color="ink.500"
                    >
                      {t("About us panel label")}
                    </Text>
                  </Flex>
                  <Text fontFamily="mono" fontSize="10px" color="ink.400">
                    01 / 03
                  </Text>
                </Flex>

                <Flex
                  position="relative"
                  align="center"
                  justify="center"
                  p={{ base: 4, md: 8 }}
                >
                  <Box
                    position="absolute"
                    inset={0}
                    opacity={0.5}
                    pointerEvents="none"
                    css={{
                      backgroundImage:
                        "linear-gradient(rgba(27,94,32,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(27,94,32,0.08) 1px, transparent 1px)",
                      backgroundSize: "26px 26px",
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

                <Flex
                  align="center"
                  justify="space-between"
                  gap={3}
                  px={4}
                  py={2.5}
                  borderTopWidth="1px"
                  borderColor="ink.200"
                  bg="white"
                >
                  <Text
                    fontFamily="mono"
                    fontSize="10px"
                    letterSpacing="0.1em"
                    textTransform="uppercase"
                    color="ink.500"
                  >
                    Standard → Generator → TIA Portal
                  </Text>
                  <Text fontFamily="mono" fontSize="10px" color="ink.400">
                    BMGK
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Reveal>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
