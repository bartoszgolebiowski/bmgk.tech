import * as React from "react";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import useMobileView from "../../utils/hooks/useMobileView";

const menu = [
  {
    name: "Our goals",
    onClick: () => {
      document
        .getElementById("ourGoals")
        .scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    name: "Products",
    onClick: () => {
      document
        .getElementById("products")
        .scrollIntoView({ behavior: "smooth" });
    },
  },
];

const Header = () => {
  const [isMobileView] = useMobileView();
  const scrollToStart = () =>
    document.getElementById("start").scrollIntoView({ behavior: "smooth" });

  return isMobileView ? (
    <HeaderMobile items={menu} scrollToStart={scrollToStart} />
  ) : (
    <HeaderDesktop items={menu} scrollToStart={scrollToStart} />
  );
};

export default Header;
