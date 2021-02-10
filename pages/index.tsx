import * as React from "react";
import Head from "next/head";
import { Container } from "@chakra-ui/react";

import Hero from "../src/sections/Hero";
import Header from "../src/sections/Header/Header";
import Details from "../src/sections/Details";
import Products from "../src/sections/Products";
import Contact from "../src/sections/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BMGK.tech</title>
        <link rel="icon" href="/BMGK.ico" />
      </Head>
      <Header />
      <Container as="main" maxW="80ch" id="start">
        <Hero />
        <Details />
        <Products />
        <Contact />
      </Container>
    </div>
  );
}
