import { Center, Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { withTranslation } from "../../i18n";

const Footer = ({ t }) => {
  return (
    <Flex
      direction="row"
      w="100%"
      h="10vh"
      justifyContent="center"
      shadow="md"
      backgroundColor="black"
      bottom="0"
      left="0"
    >
      <Center color="white">
        <Text width="5rem">
          <img src={require("../assets/BMGK.svg")} alt={"Logo"} />
        </Text>
        <Text padding="0 2rem">{t("BMGK TM")}</Text>
        <Text padding="0 2rem">{t("Company email")}</Text>
        <Text
          width="1.2rem"
          as="a"
          href="https://www.linkedin.com/company/bmgk/?viewAsMember=true"
          target="_blank"
          color="white"
        >
          <img src={require("../assets/linkedin.svg")} alt={"Linkedin"} />
        </Text>
      </Center>
    </Flex>
  );
};

export default withTranslation()(Footer);
