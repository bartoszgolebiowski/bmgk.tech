import * as React from "react";

import { Box, Center, Heading } from "@chakra-ui/react";
import ProductItem from "../components/ProductItem";

import { withTranslation } from "../../i18n";

const product1 = {
  title: "Product1",
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
  subTitle: "Product2 Description",
  Logo: () => (
    <Center w="10rem" _hover={_hover} margin="2rem auto">
      <a href="https://vass6plccreator.bmgk.tech/" target="_blank">
        <img src={require("../assets/TiaV16.svg")} alt={"TiaV16 Logo"} />
      </a>
    </Center>
  ),
  items: [
    "Product2 Description1",
    "Product2 Description2",
    "Product2 Description3",
    "Product2 Description4",
  ],
};

const products = [ product2, product1];

const _hover = { cursor: "pointer" };

const Products = ({ t }) => {
  return (
    <Box mt="2rem" mb="10rem" as="section" flexDirection="column">
      <Box mt="2rem" mb="5rem">
        <Center>
          <Heading
            as="h2"
            size="3xl"
            isTruncated
            color="#43A047"
            height="10vh"
            id="products"
          >
            {t("Products")}
          </Heading>
        </Center>
      </Box>
      {products.map(({ title, items, subTitle, Logo }) => (
        <ProductItem
          key={title}
          title={title}
          items={items}
          subTitle={subTitle}
        >
          <Logo />
        </ProductItem>
      ))}
    </Box>
  );
};

export default withTranslation()(Products);
