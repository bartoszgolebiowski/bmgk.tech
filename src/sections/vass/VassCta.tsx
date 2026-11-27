import * as React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import Reveal from "../../components/Reveal";
import { ArrowRightIcon, ExternalLinkIcon } from "../../components/Icons";
import { VASS_DOCS_URL } from "../../utils/links";

const VassCta = () => {
  const { t } = useTranslation();

  return (
    <Box as="section" id="cta" bg="white" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        <Reveal>
          <Box
            position="relative"
            overflow="hidden"
            p={{ base: 8, md: 14 }}
            borderRadius="3xl"
            bg="#0b1520"
            color="white"
            textAlign="center"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              h="2px"
              bg="linear-gradient(90deg, transparent, #f7a83a, transparent)"
              pointerEvents="none"
            />
            <Box
              position="absolute"
              right="-8rem"
              top="-8rem"
              boxSize="20rem"
              borderRadius="full"
              bg="radial-gradient(circle, rgba(76,175,80,0.18), transparent 68%)"
              pointerEvents="none"
            />

            <Box position="relative" maxW="2xl" mx="auto">
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                lineHeight="1.15"
                color="white"
              >
                {t("Vass cta title")}
              </Heading>
              <Text mt={4} color="whiteAlpha.700" lineHeight="tall">
                {t("Vass cta description")}
              </Text>

              <Flex
                mt={8}
                direction={{ base: "column", sm: "row" }}
                align="center"
                justify="center"
                gap={3}
              >
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
                  <a href={VASS_DOCS_URL} target="_blank" rel="noopener noreferrer">
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
                {t("Vass cta note")}
              </Text>
              <Text mt={2} fontSize="xs" color="whiteAlpha.500">
                {t("Portal coming soon")}
              </Text>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
};

export default VassCta;