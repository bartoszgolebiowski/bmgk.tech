import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "../../../i18n";

const FooterMobile = () => {
  const { t } = useTranslation();
  return (
    <Flex
      direction="column"
      w="100%"
      justifyContent="center"
      shadow="md"
      backgroundColor="black"
      bottom="0"
      left="0"
    >
      <Flex justifyContent="center" p="2rem 0">
        <Text width="6rem">
          <img src={require("../../assets/BMGK.svg")} alt={"Logo"} />
        </Text>
      </Flex>
      <Flex color="white" justifyContent="center" pb="2rem">
        <Text padding="0 0.5rem">{t("BMGK TM")}</Text>
        <Text padding="0 0.5rem">{t("Company email")}</Text>
      </Flex>
      <Flex justifyContent="center" pb="2rem">
        <Text
          width="1.2rem"
          as="a"
          href="https://www.linkedin.com/company/bmgk/?viewAsMember=true"
          target="_blank"
          color="white"
        >
          <img src={require("../../assets/linkedin.svg")} alt={"Linkedin"} />
        </Text>
      </Flex>
    </Flex>
  );
};

export default FooterMobile;
