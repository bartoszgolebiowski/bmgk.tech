import * as React from "react";
import { Box, Container, Stack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import ProductItem, { Product } from "../components/ProductItem";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { VASS6_DOCS_URL } from "../utils/links";

const PRODUCTS: Product[] = [
  {
    title: "Product1",
    titleHref: VASS6_DOCS_URL,
    linkLabel: "Product1 link",
    subTitle: "Product1 Description",
    badge: "Product1 badge",
    logo: "/svg/PlcCreator.svg",
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
  },
  {
    title: "Product2",
    titleHref: "https://plctianetlibrary.bmgk.tech/",
    subTitle: "Product2 Description",
    badge: "Product2 badge",
    logo: "/svg/TiaV16.svg",
    items: [
      "Product2 Description1",
      "Product2 Description2",
      "Product2 Description3",
      "Product2 Description4",
    ],
  },
];

const Products = () => {
  const { t } = useTranslation();

  return (
    <Box as="section" id="products" bg="white" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        <SectionHeading
          eyebrow={t("Products eyebrow")}
          title={t("Products")}
          description={t("Products description")}
        />

        <Stack gap={8}>
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.title} delay={index * 0.08}>
              <ProductItem {...product} />
            </Reveal>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Products;
