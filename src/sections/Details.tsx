import * as React from "react";
import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import useMobileView from "../utils/hooks/useMobileView";
import { withTranslation } from "../../i18n";

const Details = ({ t }) => {
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
            {t("Our goals")}
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
            {t("Our goals description1")}
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
            {t("Our goals description2")}
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
            {t("Our goals description3")}
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

export default withTranslation()(Details);
