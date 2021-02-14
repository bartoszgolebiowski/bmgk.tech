import * as React from "react";
import { Box, Center, Divider, Heading } from "@chakra-ui/react";
import { withTranslation } from "../../i18n";

const Hero = ({ t }) => {
  return (
    <>
      <Box mt="7rem" mb="6rem" as="section">
        <Center>
          <Heading as="h1" size="4xl" isTruncated color="#43A047">
            {t("Welcome")}
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
      <Divider orientation="horizontal" mt="5rem" />
    </>
  );
};

export default withTranslation()(Hero);
