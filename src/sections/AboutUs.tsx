import * as React from "react";
import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";

import useMobileView from "../utils/hooks/useMobileView";
import { withTranslation } from "../../i18n";

const AboutUs = ({ t }) => {
  const [isMobile] = useMobileView();

  const minH = isMobile ? "100vh" : "60vh";
  const m = "5rem 0";
  const fontSize = isMobile ? "2rem" : "1.2rem";
  const flexDirection = isMobile ? "column" : "row";

  return (
    <Box mt="2rem" mb="1rem" as="section" flexDirection="column">
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
            {t("About us")}
          </Heading>
        </Center>
      </Box>
      <Center display="flex" flexDirection={"column"}>
        <Flex flexDirection={flexDirection} minH={minH} m={m}>
          <Box
            backgroundImage={`url(/svg/aboutUs.svg)`}
            objectFit="contain"
            backgroundRepeat="no-repeat"
            backgroundSize="100% 100%"
            flex="2"
          />
          <Text
            size="xl"
            textAlign="center"
            justifyContent="center"
            flex="1"
            mt="2rem"
            fontSize={fontSize}
          >
            {t("About us description")}
          </Text>
        </Flex>
      </Center>
      <Divider />
    </Box>
  );
};

export default withTranslation()(AboutUs);
