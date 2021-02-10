import * as React from "react";
import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import useMobileView from "../utils/hooks/useMobileView";

const Details = () => {
  const [isMobile] = useMobileView();

  const minH = isMobile ? "100vh" : "60vh";
  const m = "5rem 0";
  const fontSize = isMobile ? "2rem" : "1.2rem";
  const flexDirection = isMobile ? "column" : "row";

  return (
    <Box mt="2rem" mb="6rem" as="section" flexDirection="column">
      <Box mt="2rem">
        <Center>
          <Heading
            as="h2"
            size="3xl"
            isTruncated
            color="#43A047"
            height="10vh"
            id="ourGoals"
          >
            Our goals
          </Heading>
        </Center>
      </Box>
      <Center display="flex" flexDirection={"column"}>
        <Flex flexDirection={flexDirection} minH={minH} m={m}>
          <Text
            size="xl"
            textAlign="center"
            justifyContent="center"
            flex="1"
            fontSize={fontSize}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, eos libero, nisi unde accusantium ex perspiciatis et
            excepturi sint ipsa commodi minima cupiditate illo dolorem maiores
            quos ab, iure dolor!
          </Text>
          <Box
            backgroundImage={`url(/svg/idea1.svg)`}
            objectFit="contain"
            backgroundRepeat="no-repeat"
            backgroundSize="100% 100%"
            flex="2"
          />
        </Flex>
        <Divider orientation="horizontal" mt="1rem" />
        <Flex
          minH={minH}
          m={m}
          flexDirection={!isMobile ? "row-reverse" : "column"}
        >
          <Text
            size="xl"
            textAlign="center"
            justifyContent="center"
            flex="1"
            fontSize={fontSize}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, eos libero, nisi unde accusantium ex perspiciatis et
            excepturi sint ipsa commodi minima cupiditate illo dolorem maiores
            quos ab, iure dolor!
          </Text>
          <Box
            backgroundImage={`url(/svg/idea3.svg)`}
            objectFit="contain"
            backgroundRepeat="no-repeat"
            backgroundSize="100% 100%"
            flex="2"
          />
        </Flex>
        <Divider orientation="horizontal" mt="1rem" />
        <Flex flexDirection={flexDirection} minH={minH} m={m}>
          <Text
            size="xl"
            textAlign="center"
            justifyContent="center"
            flex="1"
            fontSize={fontSize}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, eos libero, nisi unde accusantium ex perspiciatis et
            excepturi sint ipsa commodi minima cupiditate illo dolorem maiores
            quos ab, iure dolor!
          </Text>
          <Box
            backgroundImage={`url(/svg/idea2.svg)`}
            backgroundRepeat="no-repeat"
            backgroundSize="100% 100%"
            objectFit="contain"
            flex="2"
          />
        </Flex>
        <Divider orientation="horizontal" mt="1rem" />
      </Center>
    </Box>
  );
};

export default Details;
