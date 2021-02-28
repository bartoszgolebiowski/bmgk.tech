import * as React from "react";
import { Box, Center, Divider, Heading } from "@chakra-ui/react";

import AnimatedHeder from "../components/AnimatedHeder";
import useNumberCauousel from "../utils/hooks/useNumberCarousel";
import useCurrentSection from "../utils/hooks/useCurrentSection";
import { useTranslation } from "../../i18n";

const Hero = () => {
  const { t } = useTranslation();
  const [current] = useNumberCauousel(3);
  const { ref } = useCurrentSection("hero");

  return (
    <>
      <Box
        ref={ref}
        mt="7rem"
        mb="6rem"
        as="section"
        id="hero"
        css={{ scrollMarginTop: "300px" }}
      >
        <Center>
          <Heading
            as="h1"
            size="4xl"
            color="#43A047"
            textAlign="center"
            pb="1rem"
          >
            {t(`Welcome`)}
            <br />
            <AnimatedHeder>{t(`Welcome${current}`)}</AnimatedHeder>
          </Heading>
        </Center>
      </Box>
      <Box
        as="main"
        backgroundImage={`url(/svg/factoryHome.svg)`}
        objectFit="contain"
        backgroundSize="cover"
        h="50vh"
      />
      <Divider orientation="horizontal" mt="5rem" />
    </>
  );
};

export default Hero;
