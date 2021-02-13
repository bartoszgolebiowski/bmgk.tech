import * as React from "react";
import { Box, Center, Divider, Heading, Text } from "@chakra-ui/react";
import useMobileView from "../utils/hooks/useMobileView";

import { withTranslation } from "../../i18n";

const Hero = ({ t }) => {
  const [isMobile] = useMobileView();
  const fontSize = isMobile ? "2rem" : "1.2rem";

  return (
    <>
      <Box mt="7rem" mb="6rem" as="section">
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
        {t("Hero description")}
      </Text>
      <Divider orientation="horizontal" mt="5rem" />
    </>
  );
};

export default withTranslation()(Hero);
