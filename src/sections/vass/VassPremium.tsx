import * as React from "react";
import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { CheckIcon, ClockIcon, SparklesIcon } from "../../components/Icons";

const Tier = ({
  variant,
}: {
  variant: "core" | "premium";
}) => {
  const { t } = useTranslation();

  const isPremium = variant === "premium";
  const bullets = isPremium
    ? [
        { title: "Vass ai level1 title", description: "Vass ai level1 description" },
        { title: "Vass ai level2 title", description: "Vass ai level2 description" },
      ]
    : [
        { title: "Vass core bullet1", description: null },
        { title: "Vass core bullet2", description: null },
        { title: "Vass core bullet3", description: null },
      ];

  return (
    <Box
      as="article"
      position="relative"
      h="100%"
      overflow="hidden"
      p={{ base: 6, md: 8 }}
      borderRadius="3xl"
      borderWidth="1px"
      borderColor={isPremium ? "rgba(245,168,58,0.4)" : "whiteAlpha.200"}
      bg={
        isPremium
          ? "linear-gradient(145deg, rgba(245,168,58,0.12), rgba(255,255,255,0.02))"
          : "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))"
      }
      boxShadow="0 24px 80px -48px rgba(0,0,0,0.9)"
    >
      {isPremium && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          h="2px"
          bg="linear-gradient(90deg, transparent, #f7a83a, transparent)"
          pointerEvents="none"
        />
      )}

      <Flex justify="space-between" align="flex-start" gap={4}>
        <Flex
          align="center"
          justify="center"
          boxSize="12"
          borderRadius="md"
          bg={isPremium ? "rgba(245,168,58,0.16)" : "rgba(76,175,80,0.16)"}
          color={isPremium ? "accent.300" : "brand.300"}
        >
          {isPremium ? (
            <SparklesIcon width={24} height={24} />
          ) : (
            <CheckIcon width={24} height={24} />
          )}
        </Flex>
        <Badge
          display="inline-flex"
          alignItems="center"
          gap={1.5}
          bg={isPremium ? "rgba(245,168,58,0.16)" : "rgba(76,175,80,0.14)"}
          borderWidth="1px"
          borderColor={
            isPremium ? "rgba(245,168,58,0.35)" : "rgba(129,199,132,0.28)"
          }
          color={isPremium ? "accent.300" : "brand.200"}
          borderRadius="full"
          px={3}
          py={1}
          textTransform="none"
          fontSize="xs"
          fontWeight={700}
        >
          {isPremium && <ClockIcon width={12} height={12} />}
          {t(isPremium ? "Vass ai tier tag" : "Vass core tier tag")}
        </Badge>
      </Flex>

      <Heading as="h3" size="lg" mt={6} color="white">
        {t(isPremium ? "Vass ai tier title" : "Vass core tier title")}
      </Heading>
      <Text mt={3} color="whiteAlpha.700" lineHeight="tall">
        {t(isPremium ? "Vass ai tier description" : "Vass core tier description")}
      </Text>

      <Box mt={6}>
        {bullets.map(({ title, description }) => (
          <Box key={title} mb={description ? 4 : 2.5}>
            <Flex align="flex-start">
              <Flex
                flexShrink={0}
                align="center"
                justify="center"
                boxSize="5"
                mt="1px"
                mr={3}
                borderRadius="full"
                bg={isPremium ? "rgba(245,168,58,0.18)" : "rgba(76,175,80,0.16)"}
                color={isPremium ? "accent.300" : "brand.300"}
              >
                <CheckIcon width={11} height={11} />
              </Flex>
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight={600}
                  color="whiteAlpha.900"
                >
                  {t(title)}
                </Text>
                {description && (
                  <Text mt={0.5} fontSize="sm" color="whiteAlpha.600">
                    {t(description)}
                  </Text>
                )}
              </Box>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const VassPremium = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="section"
      id="premium"
      position="relative"
      overflow="hidden"
      bg="ink.900"
      color="white"
      py={{ base: 16, md: 24 }}
    >
      <Box
        position="absolute"
        top="-16rem"
        left="-10rem"
        w="40rem"
        h="40rem"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(245,168,58,0.14), rgba(245,168,58,0) 68%)"
        pointerEvents="none"
      />

      <Container maxW="6xl" position="relative">
        <SectionHeading
          eyebrow={t("Vass premium eyebrow")}
          title={t("Vass premium title")}
          description={t("Vass premium description")}
        />

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
          alignItems="stretch"
        >
          <Reveal>
            <Tier variant="core" />
          </Reveal>
          <Reveal delay={0.08}>
            <Tier variant="premium" />
          </Reveal>
        </Grid>

        <Text
          mt={6}
          textAlign="center"
          fontSize="sm"
          color="whiteAlpha.500"
        >
          {t("Vass premium note")}
        </Text>
      </Container>
    </Box>
  );
};

export default VassPremium;