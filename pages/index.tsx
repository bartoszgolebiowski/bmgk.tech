import * as React from "react";
import Head from "next/head";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";

import SkipLink from "../src/components/SkipLink";
import BackToTop from "../src/components/BackToTop";
import Header from "../src/sections/Header/Header";
import Hero from "../src/sections/Hero";
import AboutUs from "../src/sections/AboutUs";
import Services from "../src/sections/Services";
import Platform from "../src/sections/Platform";
import Products from "../src/sections/Products";
import CustomSolutions from "../src/sections/CustomSolutions";
import Downloads from "../src/sections/Downloads";
import Contact from "../src/sections/Contact";
import Footer from "../src/sections/Footer/Footer";

const SITE_URL = "https://bmgk.tech";
const SITE_IMAGE = `${SITE_URL}/svg/BMGK.svg`;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

function Home() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const language = (router.locale || i18n.language || "en").slice(0, 2);
  const title = t("SEO title");
  const description = t("SEO description");
  const canonical = language === "pl" ? `${SITE_URL}/pl` : SITE_URL;

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Head>
        <link rel="icon" href="/BMGK.ico" />

        {/* Keep meta tags directly inside Head so they are processed reliably. */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="PLC, automatyzacja, automatyka przemysłowa, VASS6, TIA Portal, TIA Openness, .NET, LAD, generator kodu PLC, AI"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="BMGK.tech" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="pl" href={`${SITE_URL}/pl`} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BMGK.tech" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta
          property="og:locale"
          content={language === "pl" ? "pl_PL" : "en_US"}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={SITE_IMAGE} />
      </Head>

      <SkipLink />
      <Header />

      <Box as="main" id="main" flex="1" tabIndex={-1} outline="none">
        <Hero />
        <AboutUs />
        <Services />
        <Platform />
        <Products />
        <CustomSolutions />
        <Downloads />
        <Contact />
      </Box>

      <Footer />
      <BackToTop />
    </Box>
  );
}

export default Home;
