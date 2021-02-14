import * as React from "react";
import Head from "next/head";
import { Container } from "@chakra-ui/react";

import Hero from "../src/sections/Hero";
import Header from "../src/sections/Header/Header";
import Details from "../src/sections/Details";
import Products from "../src/sections/Products";
import Contact from "../src/sections/Contact";
import AboutUs from "../src/sections/AboutUs";
import Footer from "../src/sections/Footer";

import { withTranslation, i18n } from "../i18n";
import Services from "../src/sections/Services";

function Home({ t }) {
  return (
    <div>
      <Head>
        <title>BMGK.tech</title>
        <link rel="icon" href="/BMGK.ico" />
      </Head>
      <Header />
      <Container as="main" maxW="100ch" id="start">
        <Hero />
        <AboutUs />
        <Details />
        <Services />
        <Products />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default withTranslation()(Home);
