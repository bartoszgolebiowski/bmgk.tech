import * as React from "react";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import useMobileView from "../../utils/hooks/useMobileView";

const Footer = () => {
  const [isMobileView] = useMobileView();

  return isMobileView ? <FooterMobile /> : <FooterDesktop />;
};

export default Footer;
