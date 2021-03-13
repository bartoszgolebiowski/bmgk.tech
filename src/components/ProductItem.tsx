import * as React from "react";
import { Box, Center, Heading, Divider } from "@chakra-ui/react";

import ProductDescriptionList from "./ProductDescriptionList";
import { useTranslation } from "../../i18n";

const _hover = { textDecoration: "underline" };
const ProductItem = ({ title, items, children, subTitle, titleHref }) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Box mt="2rem">
        <Center>
          <Heading
            as="h2"
            size="3xl"
            isTruncated
            color="#ab47bc"
            height="10vh"
            id="plcCreator"
          >
            <Box as="a" href={titleHref} target="_blank" _hover={_hover}>
              {t(title)}
            </Box>
          </Heading>
        </Center>
        {children}
        <Center>
          <Heading as="h3" fontSize="1.5rem" mt="1rem" mb="2rem">
            {t(subTitle)}
          </Heading>
        </Center>
      </Box>
      <ProductDescriptionList items={items} />
      <Divider orientation="horizontal" mt="5rem" />
    </React.Fragment>
  );
};

export default ProductItem;
