import * as React from "react";
import { TFunction } from "next-i18next";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import useMobileView from "../../utils/hooks/useMobileView";
import { useTranslation } from "../../../i18n";

const menu = (t: TFunction) => [
  {
    href: "#aboutUs",
    name: t("About us"),
  },
  {
    href: "#products",
    name: t("Products"),
  },
];

const menuMobile = (t: TFunction) => [
  ...menu(t),
  {
    href: "https://bgolebiowski.com/",
    target: "_blank" as const,
    name: t("Blog"),
  },
  {
    href: "#contact",
    name: t("Contact"),
  },
];

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileView] = useMobileView();

  return isMobileView ? (
    <HeaderMobile items={menuMobile(t)} />
  ) : (
    <HeaderDesktop items={menu(t)} />
  );
};

export default Header;
