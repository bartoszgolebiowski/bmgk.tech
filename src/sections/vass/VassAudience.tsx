import * as React from "react";
import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { CpuIcon, LayersIcon, MonitorIcon } from "../../components/Icons";

const AUDIENCE = [
  { icon: LayersIcon, title: "Vass audience1 title", description: "Vass audience1 description" },
  { icon: CpuIcon, title: "Vass audience2 title", description: "Vass audience2 description" },
  { icon: MonitorIcon, title: "Vass audience3 title", description: "Vass audience3 description" },
];

const VassAudience = () => {
  const { t } = useTranslation();

  return (
    <Box as="section" id="audience" bg="white" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        <SectionHeading
          eyebrow={t("Vass audience eyebrow")}
          title={t("Vass audience title")}
        />

        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={5}>
          {AUDIENCE.map(({ icon: AudienceIcon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <Flex
                as="article"
                h="100%"
                direction="column"
                p={6}
                bg="ink.50"
                borderWidth="1px"
                borderColor="ink.200"
                borderRadius="xl"
              >
                <Flex
                  align="center"
                  justify="center"
                  boxSize="11"
                  borderRadius="md"
                  bg="ink.900"
                  color="accent.300"
                  mb={4}
                >
                  <AudienceIcon width={22} height={22} />
                </Flex>
                <Heading as="h3" size="sm" mb={2}>
                  {t(title)}
                </Heading>
                <Text color="ink.600" fontSize="sm" lineHeight="tall">
                  {t(description)}
                </Text>
              </Flex>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default VassAudience;