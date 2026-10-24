import * as React from "react";
import { Box, type BoxProps, Heading, Text } from "@chakra-ui/react";

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
        <Text
          as="span"
          display="inline-block"
          px={3}
          py={1}
          borderRadius="full"
          bg="brand.50"
          color="brand.700"
          fontSize="xs"
          fontWeight={700}
          letterSpacing="0.08em"
          textTransform="uppercase"
        >
          {eyebrow}
        </Text>
      )}
      <Heading
        as="h2"
        mt={eyebrow ? 4 : 0}
        fontSize={{ base: "3xl", md: "4xl" }}
        lineHeight="1.15"
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
