import * as React from "react";
import Head from "next/head";
import { Container } from "@chakra-ui/react";

import Hero from "../src/sections/Hero";
import Footer from "../src/sections/Footer/Footer";
import Header from "../src/sections/Header/Header";
import Products from "../src/sections/Products";
import Contact from "../src/sections/Contact";
import AboutUs from "../src/sections/AboutUs";
import SEO from "../src/components/SEO";

function Home() {
  return (
    <div>
      <Head>
        <title>BMGK.tech</title>
        <link rel="icon" href="/BMGK.ico" />
        <SEO />
      </Head>
      <Header />
      <Container as="main" maxW="100ch" id="start">
        <Hero />
        <AboutUs />
        <Products />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
