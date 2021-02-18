import * as React from "react";
import { TFunction } from "next-i18next";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import useMobileView from "../../utils/hooks/useMobileView";
import { useTranslation } from "../../../i18n";

const menu = (t: TFunction) => [
  {
    name: t("About us"),
    onClick: () => {
      document
        .getElementById("aboutUs")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
    },
  },
  {
    name: t("Services"),
    onClick: () => {
      document
        .getElementById("services")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
    },
  },
  {
    name: t("Our goals"),
    onClick: () => {
      document
        .getElementById("ourGoals")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
    },
  },

  {
    name: t("Products"),
    onClick: () => {
      document
        .getElementById("products")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
    },
  },
];

const menuMobile = (t: TFunction) => [
  ...menu(t),
  {
    name: t("Contact"),
    onClick: () =>
      document
        .getElementById("contact")
        .scrollIntoView({ behavior: "smooth", inline: "start" }),
  },
];

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileView] = useMobileView();
  const scrollToStart = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return isMobileView ? (
    <HeaderMobile items={menuMobile(t)} scrollToStart={scrollToStart} />
  ) : (
    <HeaderDesktop items={menu(t)} scrollToStart={scrollToStart} />
  );
};

export default Header;
