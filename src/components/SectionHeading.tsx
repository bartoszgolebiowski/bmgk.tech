import * as React from "react";
import { Box, Flex, type BoxProps, Heading, Text } from "@chakra-ui/react";

type SectionHeadingProps = BoxProps & {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  ...rest
}: SectionHeadingProps) => {
  const isCentered = align === "center";

  return (
    <Box
      textAlign={align}
      maxW={isCentered ? "3xl" : "2xl"}
      mx={isCentered ? "auto" : 0}
      mb={isCentered ? { base: 10, md: 14 } : { base: 6, md: 8 }}
      {...rest}
    >
      {eyebrow && (
        <Flex
          align="center"
          justify={isCentered ? "center" : "flex-start"}
          gap={3}
          mb={4}
        >
          <Box w="8" h="2px" bg="accent.500" flexShrink={0} />
          <Text
            as="span"
            fontFamily="mono"
            color="steel.600"
            fontSize="xs"
            fontWeight={700}
            letterSpacing="0.14em"
            textTransform="uppercase"
          >
            {eyebrow}
          </Text>
        </Flex>
      )}
      <Heading
        as="h2"
        mt={0}
        fontSize={{ base: "3xl", md: "4xl" }}
        lineHeight="1.12"
        letterSpacing="-0.03em"
      >
        {title}
      </Heading>
      {description && (
        <Text
          mt={4}
          color="ink.600"
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="tall"
        >
          {description}
        </Text>
      )}
    </Box>
  );
};

export default SectionHeading;
