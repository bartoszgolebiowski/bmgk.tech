import * as React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/SectionHeading";
import { MailIcon } from "../components/Icons";

const Contact = () => {
  const { t } = useTranslation();
  const email = t("Company email");

  return (
    <Box as="section" id="contact" bg="white" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1.1fr" }}
          gap={{ base: 10, lg: 16 }}
          alignItems="start"
        >
          <Box>
            <SectionHeading
              align="left"
              eyebrow={t("Contact eyebrow")}
              title={t("Contact us")}
              description={t("Contact description")}
            />

            <Stack gap={3}>
              <Flex
                asChild
                align="center"
                p={4}
                bg="ink.50"
                borderWidth="1px"
                borderColor="ink.200"
                borderRadius="2xl"
                transition="border-color .15s ease, background-color .15s ease"
                _hover={{
                  textDecoration: "none",
                  borderColor: "brand.200",
                  bg: "brand.50",
                }}
              >
                <a href={`mailto:${email}`}>
                  <Flex
                    flexShrink={0}
                    align="center"
                    justify="center"
                    boxSize="11"
                    mr={4}
                    borderRadius="xl"
                    bg="white"
                    color="brand.700"
                    boxShadow="0 1px 2px rgba(15,23,42,0.06)"
                  >
                    <MailIcon width={20} height={20} />
                  </Flex>
                  <Box>
                    <Text fontSize="xs" color="ink.500" fontWeight={600}>
                      {t("Contact email label")}
                    </Text>
                    <Text fontWeight={600} color="ink.900">
                      {email}
                    </Text>
                  </Box>
                </a>
              </Flex>

              <Flex
                asChild
                align="center"
                p={4}
                bg="ink.50"
                borderWidth="1px"
                borderColor="ink.200"
                borderRadius="2xl"
                transition="border-color .15s ease, background-color .15s ease"
                _hover={{
                  textDecoration: "none",
                  borderColor: "accent.200",
                  bg: "accent.50",
                }}
              >
                <a
                  href="https://www.linkedin.com/company/bmgk/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Flex
                    flexShrink={0}
                    align="center"
                    justify="center"
                    boxSize="11"
                    mr={4}
                    borderRadius="xl"
                    bg="white"
                    boxShadow="0 1px 2px rgba(15,23,42,0.06)"
                  >
                    <img
                      src="/svg/linkedin.svg"
                      alt=""
                      style={{ width: 20, height: 20 }}
                    />
                  </Flex>
                  <Box>
                    <Text fontSize="xs" color="ink.500" fontWeight={600}>
                      {t("Contact linkedin label")}
                    </Text>
                    <Text fontWeight={600} color="ink.900">
                      BMGK
                    </Text>
                  </Box>
                </a>
              </Flex>
            </Stack>
          </Box>

          <Box>
            <Box mb={5}>
              <Heading as="h3" size="md">
                {t("Contact form title")}
              </Heading>
              <Text mt={1} color="ink.600" fontSize="sm">
                {t("Contact form description")}
              </Text>
            </Box>
            <ContactForm />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
