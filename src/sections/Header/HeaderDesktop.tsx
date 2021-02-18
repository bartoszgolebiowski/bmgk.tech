import * as React from "react";
import { Center, Flex } from "@chakra-ui/react";

import LanguageSelect from "../../components/LanguageSelect";
import { useTranslation } from "../../../i18n";

const _hover = { cursor: "pointer" };

const scrollToContact = () =>
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

type HeaderDesktopProps = {
  items: { name: string; onClick: () => void }[];
  scrollToStart: () => void;
};

const HeaderDesktop: React.FC<HeaderDesktopProps> = ({
  items,
  scrollToStart,
}) => {
  const { t } = useTranslation();

  return (
    <Flex
      direction="row"
      w="100%"
      h="10vh"
      justifyContent="space-between"
      shadow="md"
      position="fixed"
      backgroundColor="white"
      top="0"
      left="0"
      zIndex="1000"
    >
      <Flex flex="1">
        <Center w="10rem" _hover={_hover} onClick={scrollToStart}>
          <img src={require("../../assets/BMGK.svg")} alt="BMGK Logo" />
        </Center>
      </Flex>
      <Flex flex="3" direction="row" justifyContent="center" shrink="revert">
        {items.map((menuItem) => (
          <Center
            w="7rem"
            _hover={_hover}
            key={menuItem.name}
            onClick={menuItem.onClick}
          >
            {menuItem.name}
          </Center>
        ))}
      </Flex>
      <Flex flex="1" justifyContent="flex-end">
        <Center _hover={_hover}>
          <LanguageSelect />
        </Center>
        <Center w="10rem" _hover={_hover} onClick={scrollToContact}>
          {t("Contact")}
        </Center>
      </Flex>
    </Flex>
  );
};

export default HeaderDesktop;
