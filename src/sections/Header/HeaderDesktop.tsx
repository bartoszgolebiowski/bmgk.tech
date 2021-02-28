import * as React from "react";
import { Router } from "next/router";
import { Center, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

import LanguageSelect from "../../components/LanguageSelect";
import useCurrentHref from "../../utils/hooks/useCurrentHref";
import { useTranslation } from "../../../i18n";

const _hover = {
  cursor: "pointer",
};

type HeaderDesktopProps = {
  items: { name: string; href: string }[];
};

const HeaderDesktop: React.FC<HeaderDesktopProps> = ({ items }) => {
  const { t } = useTranslation();
  const { active } = useCurrentHref(items);

  const isActive = active === "#contact";

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
        <Center w="10rem" _hover={_hover} as="a" href="#hero">
          <img src={require("../../assets/BMGK.svg")} alt="BMGK Logo" />
        </Center>
      </Flex>
      <Flex flex="3" direction="row" justifyContent="center" shrink="revert">
        {items.map((menuItem) => {
          const isActive = active === menuItem.href;

          return (
            <Center
              w="7rem"
              _hover={_hover}
              key={menuItem.name}
              as="a"
              href={menuItem.href}
              onClick={() => Router.events.emit("hashChangeStart")}
            >
              <motion.span
                style={{
                  fontSize: "1.2rem",
                }}
                transition={{ repeat: Infinity, duration: 8 }}
                animate={{
                  scale: isActive ? [1.1, 1.2, 1.1, 1.2, 1.1] : [1, 1, 1, 1, 1],
                }}
              >
                {menuItem.name}
              </motion.span>
            </Center>
          );
        })}
      </Flex>
      <Flex flex="1" justifyContent="flex-end">
        <Center _hover={_hover}>
          <LanguageSelect />
        </Center>
        <Center w="10rem" _hover={_hover} as="a" href="#contact">
          <motion.span
            style={{
              fontSize: "1.3rem",
            }}
            transition={{ repeat: Infinity, duration: 8 }}
            animate={{
              scale: isActive ? [1.1, 1.2, 1.1, 1.2, 1.1] : [1, 1, 1, 1, 1],
            }}
          >
            {t("Contact")}
          </motion.span>
        </Center>
      </Flex>
    </Flex>
  );
};

export default HeaderDesktop;
