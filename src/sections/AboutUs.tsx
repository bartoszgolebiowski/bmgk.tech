import * as React from "react";
import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";

import useMobileView from "../utils/hooks/useMobileView";
import { useTranslation } from "../../i18n";

const AboutUs = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useTranslation();
  const [isMobile] = useMobileView();

  const minH = isMobile ? "100vh" : "60vh";
  const m = "5rem 0";
  const fontSize = isMobile ? "2rem" : "1.2rem";
  const flexDirection = isMobile ? "column" : "row";

  return (
    <Box
      mt="2rem"
      mb="1rem"
      as="section"
      flexDirection="column"
      id="aboutUs"
      ref={ref}
    >
      <Box mt="2rem">
        <Center>
          <Heading as="h2" size="3xl" isTruncated color="#43A047" height="10vh">
            {t("About us")}
          </Heading>
        </Center>
      </Box>
      <Center display="flex" flexDirection={"column"}>
        <Flex flexDirection={flexDirection} minH={minH} m={m}>
          <Flex
            backgroundImage={`url(/svg/aboutUs.svg)`}
            objectFit="contain"
            backgroundRepeat="no-repeat"
            backgroundSize="100% 100%"
            flex="2"
          />
          <Flex flex="1" margin="auto 0">
            <Text
              textAlign="center"
              justifyContent="center"
              fontSize={fontSize}
            >
              {t("About us description")}
            </Text>
          </Flex>
        </Flex>
      </Center>
      <Divider />
    </Box>
  );
});

export default AboutUs;
