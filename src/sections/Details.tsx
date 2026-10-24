import * as React from "react";
import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const VALUES = [
  {
    image: "/svg/idea1.svg",
    title: "Our goals description1Title",
    description: "Our goals description1",
  },
  {
    image: "/svg/idea3.svg",
    title: "Our goals description2Title",
    description: "Our goals description2",
  },
  {
    image: "/svg/idea2.svg",
    title: "Our goals description3Title",
    description: "Our goals description3",
  },
];

const Details = () => {
  const { t } = useTranslation();

  return (
    <Box as="section" id="ourGoals" bg="white" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        <SectionHeading
          eyebrow={t("Our goals eyebrow")}
          title={t("Our goals")}
        />

        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {VALUES.map(({ image, title, description }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <Flex
                direction="column"
                h="100%"
                bg="white"
                borderWidth="1px"
                borderColor="ink.200"
                borderRadius="3xl"
                boxShadow="card"
                overflow="hidden"
                transition="transform .2s ease, box-shadow .2s ease"
                _hover={{ transform: "translateY(-4px)", boxShadow: "cardHover" }}
              >
                <Flex
                  align="center"
                  justify="center"
                  px={6}
                  pt={6}
                  pb={2}
                  bg="linear-gradient(180deg, rgba(67,160,71,0.08), rgba(255,255,255,0))"
                >
                  <img
                    src={image}
                    alt=""
                    aria-hidden="true"
                    style={{
                      width: "100%",
                      height: 150,
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </Flex>

                <Box p={{ base: 6, md: 7 }} pt={4}>
                  <Text
                    fontSize="xs"
                    fontWeight={700}
                    letterSpacing="0.08em"
                    color="brand.600"
                    mb={3}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <Heading as="h3" size="md" mb={3}>
                    {t(title)}
                  </Heading>
                  <Text color="ink.600" fontSize="sm" lineHeight="tall">
                    {t(description)}
                  </Text>
                </Box>
              </Flex>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Details;
