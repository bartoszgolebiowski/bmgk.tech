import * as React from "react";
import { Center, Flex } from "@chakra-ui/react";
const _hover = { cursor: "pointer" };

type HeaderDesktopProps = {
  items: { name: string; onClick: () => void }[];
  scrollToStart: () => void;
};

const HeaderDesktop: React.FC<HeaderDesktopProps> = ({
  items,
  scrollToStart,
}) => {
  const scrollToContact = () =>
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

  return (
    <Flex
      direction="row"
      w="100%"
      h="10vh"
      justifyContent="space-between"
      shadow="md"
    >
      <Flex flex="1">
        <Center w="10rem" _hover={_hover} onClick={scrollToStart}>
          <img src={require("../../assets/BMGK.svg")} alt="BMGK Logo" />
        </Center>
      </Flex>
      <Flex flex="3" direction="row" justifyContent="center">
        {items.map((menuItem) => (
          <Center
            w="10rem"
            _hover={_hover}
            key={menuItem.name}
            onClick={menuItem.onClick}
          >
            {menuItem.name}
          </Center>
        ))}
      </Flex>
      <Flex flex="1" justifyContent="flex-end">
        <Center w="10rem" _hover={_hover} onClick={scrollToContact}>
          Contact
        </Center>
      </Flex>
    </Flex>
  );
};

export default HeaderDesktop;
