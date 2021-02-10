import * as React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { EmailIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import useMobileView from "../utils/hooks/useMobileView";

const Hero = () => {
  const [isMobile] = useMobileView();

  const fontSize = isMobile ? "2rem" : "1.2rem";

  const scrollToEmail = () =>
    document
      .getElementById("emailContact")
      .scrollIntoView({ behavior: "smooth" });

  const scrollToCallUs = () =>
    document.getElementById("callUs").scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Box mt="2rem" mb="6rem" as="section">
        <Center>
          <Heading as="h1" size="4xl" isTruncated color="#43A047">
            BMGK.tech
          </Heading>
        </Center>
      </Box>
      <Box
        as="main"
        backgroundImage={`url(/svg/factoryHome.svg)`}
        objectFit="contain"
        backgroundSize="cover"
        h="50vh"
      />
      <Text
        size="xl"
        textAlign="center"
        justifyContent="center"
        flex="1"
        fontSize={fontSize}
        mt="5rem"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        eos libero, nisi unde accusantium ex perspiciatis et excepturi sint ipsa
        commodi minima cupiditate illo dolorem maiores quos ab, iure dolor!
      </Text>
      <Flex direction="row" justifyContent="space-around" mt="5rem">
        <Button
          leftIcon={<EmailIcon />}
          size="lg"
          color="#ab47bc"
          variant="solid"
          onClick={scrollToEmail}
        >
          Email
        </Button>
        <Button
          size="lg"
          rightIcon={<ArrowForwardIcon />}
          color="#43A047"
          variant="outline"
          onClick={scrollToCallUs}
        >
          Call us
        </Button>
      </Flex>
      <Divider orientation="horizontal" mt="5rem" />
    </>
  );
};

export default Hero;
