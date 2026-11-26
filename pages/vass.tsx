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
import Footer from "../src/sections/Footer/Footer";
import VassHero from "../src/sections/vass/VassHero";
import VassWorkflow from "../src/sections/vass/VassWorkflow";
import VassFeatures from "../src/sections/vass/VassFeatures";
import VassScreenshots from "../src/sections/vass/VassScreenshots";
import VassAudience from "../src/sections/vass/VassAudience";
import VassPremium from "../src/sections/vass/VassPremium";
import VassCta from "../src/sections/vass/VassCta";

const SITE_URL = "https://bmgk.tech";
const SITE_IMAGE = `${SITE_URL}/svg/PlcCreator.svg`;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

function VassPage() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const language = (router.locale || i18n.language || "en").slice(0, 2);
  const title = t("Vass seo title");
  const description = t("Vass seo description");
  const canonical = language === "pl" ? `${SITE_URL}/pl/vass` : `${SITE_URL}/vass`;

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Head>
        <link rel="icon" href="/BMGK.ico" />

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="VASS, PLC, TIA Portal, VASS PLC Creator, generator kodu PLC, LAD, EPLAN, safety matrix, .s7z"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="BMGK.tech" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/vass`} />
        <link rel="alternate" hrefLang="pl" href={`${SITE_URL}/pl/vass`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/vass`} />

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
        <VassHero />
        <VassWorkflow />
        <VassFeatures />
        <VassScreenshots />
        <VassAudience />
        <VassPremium />
        <VassCta />
      </Box>

      <Footer />
      <BackToTop />
    </Box>
  );
}

export default VassPage;