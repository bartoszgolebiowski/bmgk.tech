import * as React from "react";
import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import {
  ArchiveIcon,
  CodeIcon,
  UploadIcon,
} from "../../components/Icons";

const STEPS = [
  {
    icon: UploadIcon,
    title: "Vass step1 title",
    description: "Vass step1 description",
  },
  {
    icon: CodeIcon,
    title: "Vass step2 title",
    description: "Vass step2 description",
  },
  {
    icon: ArchiveIcon,
    title: "Vass step3 title",
    description: "Vass step3 description",
  },
];

const VassWorkflow = () => {
  const { t } = useTranslation();

  return (
    <Box as="section" id="workflow" bg="ink.50" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        <SectionHeading
          eyebrow={t("Vass workflow eyebrow")}
          title={t("Vass workflow title")}
          description={t("Vass workflow description")}
        />

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={5}
        >
          {STEPS.map(({ icon: StepIcon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <Box
                as="article"
                h="100%"
                position="relative"
                p={{ base: 6, md: 7 }}
                bg="white"
                borderWidth="1px"
                borderColor="ink.200"
                borderRadius="xl"
                boxShadow="card"
              >
                <Flex justify="space-between" align="flex-start" mb={6}>
                  <Flex
                    align="center"
                    justify="center"
                    boxSize="12"
                    borderRadius="md"
                    bg="ink.900"
                    color="accent.300"
                  >
                    <StepIcon width={24} height={24} />
                  </Flex>
                  <Text
                    fontFamily="mono"
                    fontSize="10px"
                    fontWeight={700}
                    letterSpacing="0.14em"
                    color="ink.400"
                  >
                    0{index + 1}
                  </Text>
                </Flex>
                <Heading as="h3" size="md" mb={2}>
                  {t(title)}
                </Heading>
                <Text color="ink.600" fontSize="sm" lineHeight="tall">
                  {t(description)}
                </Text>
              </Box>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default VassWorkflow;