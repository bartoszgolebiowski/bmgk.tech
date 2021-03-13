import * as React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";

import ProductItem from "../components/ProductItem";
import Transition from "../components/Transition";
import { useTranslation } from "../../i18n";
import useCurrentSection from "../utils/hooks/useCurrentSection";

const product1 = {
  title: "Product1",
  titleHref: "https://vass6plccreator.bmgk.tech/",
  subTitle: "Product1 Description",
  Logo: () => (
    <Center w="10rem" _hover={_hover} margin="2rem auto">
      <a href="https://vass6plccreator.bmgk.tech/" target="_blank">
        <img
          src={require("../assets/PlcCreator.svg")}
          alt={"PLC Creator Logo"}
        />
      </a>
    </Center>
  ),
  items: [
    "Product1 Description1",
    "Product1 Description2",
    "Product1 Description3",
    "Product1 Description4",
    "Product1 Description5",
    "Product1 Description6",
    "Product1 Description7",
    "Product1 Description8",
    "Product1 Description9",
  ],
};

const product2 = {
  title: "Product2",
  titleHref: "https://plctianetlibrary.bmgk.tech/",
  subTitle: "Product2 Description",
  Logo: () => (
    <a href="https://plctianetlibrary.bmgk.tech/" target="_blank">
      <Center w="10rem" margin="2rem auto">
        <img src={require("../assets/TiaV16.svg")} alt={"TiaV16 Logo"} />
      </Center>
    </a>
  ),
  items: [
    "Product2 Description1",
    "Product2 Description2",
    "Product2 Description3",
    "Product2 Description4",
  ],
};

const products = [product2, product1];
const _hover = { cursor: "pointer" };

const Products = () => {
  const { t } = useTranslation();
  const { ref } = useCurrentSection("products");

  return (
    <Box
      ref={ref}
      mt="2rem"
      mb="10rem"
      as="section"
      flexDirection="column"
      id="products"
      css={{ scrollMarginTop: "100px" }}
    >
      <Box mt="2rem" mb="5rem">
        <Center>
          <Heading as="h2" size="3xl" isTruncated color="#43A047" height="10vh">
            {t("Products")}
          </Heading>
        </Center>
      </Box>
      {products.map(({ Logo, ...rest }) => (
        <Transition key={rest.title}>
          <ProductItem {...rest}>
            <Logo />
          </ProductItem>
        </Transition>
      ))}
    </Box>
  );
};

export default Products;
