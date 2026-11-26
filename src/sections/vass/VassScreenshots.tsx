import * as React from "react";
import {
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
import { ArrowRightIcon, DownloadIcon } from "../../components/Icons";

/**
 * Browser-like frame used by all three screenshot mocks below. Real product
 * screenshots replace the inner content of these frames once available.
 */
const Frame = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <Box
    borderWidth="1px"
    borderColor="whiteAlpha.200"
    borderRadius="xl"
    overflow="hidden"
    bg="#050b12"
    boxShadow="0 40px 90px -48px rgba(0,0,0,0.95)"
  >
    <Flex
      align="center"
      justify="space-between"
      px={4}
      py={2.5}
      borderBottomWidth="1px"
      borderColor="whiteAlpha.200"
      bg="whiteAlpha.50"
    >
      <Flex align="center" gap={2}>
        <Box boxSize="2" borderRadius="full" bg="#ff5f56" />
        <Box boxSize="2" borderRadius="full" bg="#ffbd2e" />
        <Box boxSize="2" borderRadius="full" bg="#27c93f" />
      </Flex>
      <Text
        fontFamily="mono"
        fontSize="10px"
        letterSpacing="0.1em"
        textTransform="uppercase"
        color="whiteAlpha.500"
      >
        {label}
      </Text>
      <Box boxSize="2" />
    </Flex>
    {children}
  </Box>
);

const Node = ({
  color = "brand.400",
  size = "1.5",
}: {
  color?: string;
  size?: string;
}) => <Box boxSize={size} borderRadius="full" bg={color} flexShrink={0} />;

/* Mock 1 — project structure tree */
const StructureMock = () => (
  <Box display="flex" minH="340px">
    <Box
      w="170px"
      flexShrink={0}
      borderRightWidth="1px"
      borderColor="whiteAlpha.200"
      p={3}
      display={{ base: "none", sm: "block" }}
    >
      {[
        { d: 0, t: "Line-42" },
        { d: 1, t: "PLC-01" },
        { d: 2, t: "Zone A" },
        { d: 3, t: "Robot R1" },
        { d: 3, t: "Station S1" },
        { d: 2, t: "Zone B" },
        { d: 3, t: "RollingTrack" },
        { d: 3, t: "Brama/Geo" },
      ].map(({ d, t }) => (
        <Flex key={t} align="center" gap={2} py={1.5}>
          <Box w={d * 8} flexShrink={0} />
          <Node color={d === 3 ? "accent.400" : "brand.400"} />
          <Text fontFamily="mono" fontSize="10px" color="whiteAlpha.700">
            {t}
          </Text>
        </Flex>
      ))}
    </Box>
    <Box flex={1} p={4}>
      <Text fontFamily="mono" fontSize="9px" color="whiteAlpha.400" mb={3}>
        part-flow
      </Text>
      {/* mini part-flow: vertical chain of nodes */}
      <Flex direction="column" align="center" gap={2}>
        {Array.from({ length: 5 }).map((_, i) => (
          <React.Fragment key={i}>
            <Flex
              align="center"
              gap={2}
              px={3}
              py={2}
              borderRadius="md"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              bg="whiteAlpha.50"
            >
              <Node color={i % 2 === 0 ? "brand.400" : "accent.400"} />
              <Text fontFamily="mono" fontSize="10px" color="whiteAlpha.700">
                step-0{i + 1}
              </Text>
            </Flex>
            {i < 4 && <Box w="2px" h="1rem" bg="whiteAlpha.200" />}
          </React.Fragment>
        ))}
      </Flex>
    </Box>
  </Box>
);

/* Mock 2 — part-flow canvas with combined variants */
const PartFlowMock = () => (
  <Box p={4} minH="340px">
    <Flex align="center" justify="center" gap={{ base: 2, md: 3 }} wrap="wrap">
      {[
        { t: "Enter", tone: "brand" },
        { t: "TakePart", tone: "accent" },
        { t: "PutPart", tone: "brand" },
        { t: "Exit", tone: "accent" },
      ].map(({ t, tone }, i) => (
        <React.Fragment key={t}>
          <Box
            px={3}
            py={2}
            borderRadius="md"
            borderWidth="1px"
            borderColor={tone === "brand" ? "brand.400" : "accent.500"}
            bg="whiteAlpha.50"
          >
            <Text
              fontFamily="mono"
              fontSize="10px"
              color={tone === "brand" ? "brand.200" : "accent.300"}
            >
              {t}
            </Text>
          </Box>
          {i < 3 && (
            <Box color="whiteAlpha.400">
              <ArrowRightIcon width={14} height={14} />
            </Box>
          )}
        </React.Fragment>
      ))}
    </Flex>

    <Box
      mt={5}
      p={3}
      borderRadius="md"
      borderWidth="1px"
      borderColor="accent.500"
      bg="rgba(224,138,18,0.08)"
    >
      <Text
        fontFamily="mono"
        fontSize="9px"
        letterSpacing="0.12em"
        textTransform="uppercase"
        color="accent.300"
      >
        combined variant
      </Text>
      <Flex gap={2} mt={2} wrap="wrap">
        {["RollingTrack", "TurnTable", "Conveyor"].map((s) => (
          <Box
            key={s}
            px={2.5}
            py={1.5}
            borderRadius="sm"
            borderWidth="1px"
            borderColor="whiteAlpha.300"
            fontFamily="mono"
            fontSize="10px"
            color="whiteAlpha.700"
          >
            {s}
          </Box>
        ))}
      </Flex>
    </Box>
  </Box>
);

/* Mock 3 — generate & download */
const GenerateMock = () => (
  <Box p={4} display="flex" flexDirection="column" minH="340px">
    <Flex
      align="center"
      justify="center"
      gap={2}
      py={3}
      borderRadius="md"
      bg="accent.500"
      color="ink.900"
      fontFamily="mono"
      fontSize="11px"
      fontWeight={700}
      letterSpacing="0.1em"
      textTransform="uppercase"
    >
      <ArrowRightIcon width={13} height={13} />
      Generate project
    </Flex>

    <Box
      mt={3}
      p={3}
      borderWidth="1px"
      borderColor="brand.400"
      borderRadius="md"
      bg="rgba(76,175,80,0.10)"
      display="flex"
      alignItems="center"
      gap={3}
    >
      <Box color="brand.300">
        <DownloadIcon width={20} height={20} />
      </Box>
      <Box flex={1} overflow="hidden">
        <Text fontFamily="mono" fontSize="sm" color="brand.200">
          line-42_vass.s7z
        </Text>
        <Text fontFamily="mono" fontSize="10px" color="whiteAlpha.500">
          ready for TIA Project Importer
        </Text>
      </Box>
    </Box>

    <Box mt={3} flex={1} p={3} borderRadius="md" bg="whiteAlpha.50">
      {[
        { m: "✓", t: "DB / FB / FC generated", c: "brand.300" },
        { m: "✓", t: "ARG & safety blocks done", c: "brand.300" },
        { m: "✓", t: "tag tables & comms", c: "brand.300" },
        { m: "→", t: ".s7z packed", c: "accent.300" },
      ].map((log) => (
        <Flex key={log.t} gap={2} mb={1.5}>
          <Text fontFamily="mono" fontSize="11px" color={log.c}>
            {log.m}
          </Text>
          <Text fontFamily="mono" fontSize="11px" color="whiteAlpha.600">
            {log.t}
          </Text>
        </Flex>
      ))}
    </Box>
  </Box>
);

const MOCKS = [
  { label: "Vass shot1 label", node: <StructureMock /> },
  { label: "Vass shot2 label", node: <PartFlowMock /> },
  { label: "Vass shot3 label", node: <GenerateMock /> },
];

const VassScreenshots = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="section"
      id="screenshots"
      position="relative"
      overflow="hidden"
      bg="#0b1520"
      color="white"
      py={{ base: 16, md: 24 }}
    >
      <Box
        position="absolute"
        inset={0}
        opacity={0.32}
        pointerEvents="none"
        css={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.9), transparent 78%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.9), transparent 78%)",
        }}
      />

      <Container maxW="6xl" position="relative">
        <SectionHeading
          eyebrow={t("Vass screenshots eyebrow")}
          title={t("Vass screenshots title")}
          description={t("Vass screenshots description")}
        />

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={6}
          alignItems="start"
        >
          {MOCKS.map(({ label, node }, index) => (
            <Reveal key={label} delay={index * 0.08}>
              <Frame label={t(label)}>{node}</Frame>
            </Reveal>
          ))}
        </Grid>

        <Text
          mt={6}
          textAlign="center"
          fontFamily="mono"
          fontSize="10px"
          letterSpacing="0.06em"
          color="whiteAlpha.400"
          lineHeight="tall"
        >
          {t("Vass screenshots note")}
        </Text>
      </Container>
    </Box>
  );
};

export default VassScreenshots;