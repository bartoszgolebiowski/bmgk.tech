import * as React from "react";
import Head from "next/head";
import dynamic from 'next/dynamic'
import { Container } from "@chakra-ui/react";
import Transition, { rightAnimation } from "../src/components/Transition";

const Hero = dynamic(() => import("../src/sections/Hero"));
const Header = dynamic(() => import("../src/sections/Header/Header"));
const Details = dynamic(() => import("../src/sections/Details"));
const Products = dynamic(() => import("../src/sections/Products"));
const Contact = dynamic(() => import("../src/sections/Contact"));
const AboutUs = dynamic(() => import("../src/sections/AboutUs"));
const Footer = dynamic(() => import("../src/sections/Footer/Footer"));
const Services = dynamic(() => import("../src/sections/Services"));

function Home() {
  return (
    <div>
      <Head>
        <title>BMGK.tech</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <link rel="icon" href="/BMGK.ico" />
      </Head>
      <Header />
      <Container as="main" maxW="100ch" id="start">
        <Transition>
          <Hero />
        </Transition>
        <Transition {...rightAnimation}>
          <AboutUs />
        </Transition>
        <Transition>
          <Services />
        </Transition>
        <Details />
        <Transition {...rightAnimation}>
          <Products />
        </Transition>
        <Transition>
          <Contact />
        </Transition>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
