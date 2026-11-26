import * as React from "react";
import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import {
  ArchiveIcon,
  CpuIcon,
  GlobeIcon,
  ImportIcon,
  LayersIcon,
  PlugIcon,
  SlidersIcon,
  SparklesIcon,
} from "../../components/Icons";

const FEATURES = [
  { icon: ImportIcon, title: "Vass feature1 title", description: "Vass feature1 description" },
  { icon: SparklesIcon, title: "Vass feature2 title", description: "Vass feature2 description" },
  { icon: LayersIcon, title: "Vass feature3 title", description: "Vass feature3 description" },
  { icon: CpuIcon, title: "Vass feature4 title", description: "Vass feature4 description" },
  { icon: LayersIcon, title: "Vass feature5 title", description: "Vass feature5 description" },
  { icon: PlugIcon, title: "Vass feature6 title", description: "Vass feature6 description" },
  { icon: GlobeIcon, title: "Vass feature7 title", description: "Vass feature7 description" },
  { icon: ArchiveIcon, title: "Vass feature8 title", description: "Vass feature8 description" },
];

const VassFeatures = () => {
  const { t } = useTranslation();

  return (
    <Box as="section" id="features" bg="white" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        <SectionHeading
          eyebrow={t("Vass features eyebrow")}
          title={t("Vass features title")}
          description={t("Vass features description")}
        />

        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={5}
        >
          {FEATURES.map(({ icon: FeatureIcon, title, description }, index) => (
            <Reveal key={title} delay={(index % 4) * 0.05}>
              <Box
                as="article"
                h="100%"
                p={6}
                bg="ink.50"
                borderWidth="1px"
                borderColor="ink.200"
                borderRadius="xl"
                transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
                _hover={{
                  transform: "translateY(-3px)",
                  boxShadow: "cardHover",
                  borderColor: "steel.300",
                }}
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
                  <FeatureIcon width={22} height={22} />
                </Flex>
                <Heading as="h3" size="sm" mb={2}>
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

export default VassFeatures;