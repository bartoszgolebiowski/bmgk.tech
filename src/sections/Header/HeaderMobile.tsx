import * as React from "react";

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  Center,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
} from "@chakra-ui/react";

type HeaderMobileProps = {
  items: { name: string; onClick: () => void }[];
  scrollToStart: () => void;
};

const HeaderMobile: React.FC<HeaderMobileProps> = ({
  items,
  scrollToStart,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const _hover = { cursor: "pointer" };
  const _first = { padding: "2rem 0 0 0" };

  const mobileItems = [
    ...items,
    {
      name: "Contact",
      onClick: () =>
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <>
      <Flex
        direction="row"
        w="100%"
        h="10vh"
        justifyContent="space-between"
        shadow="md"
      >
        <Flex flex="1">
          <Center w="10rem" fontSize="2rem" onClick={scrollToStart}>
            <img src={require("../../assets/BMGK.svg")} alt="BMGK Logo" />
          </Center>
        </Flex>
        <Flex flex="1" justifyContent="flex-end">
          <Center w="10rem">
            <HamburgerIcon
              aria-label="menu"
              fontSize="2rem"
              mt="0.7rem"
              _hover={_hover}
              onClick={onOpen}
            />
          </Center>
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <List spacing={12}>
                {mobileItems.map((menuItem) => (
                  <ListItem
                    key={menuItem.name}
                    _first={_first}
                    _hover={_hover}
                    fontSize="1.5rem"
                    onClick={() => {
                      onClose();
                      menuItem.onClick();
                    }}
                  >
                    {menuItem.name}
                  </ListItem>
                ))}
              </List>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default HeaderMobile;
