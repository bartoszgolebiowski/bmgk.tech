import * as React from "react";
import { Box, Center, Heading, Divider } from "@chakra-ui/react";

import ProductDescriptionList from "./ProductDescriptionList";
import { withTranslation } from "../../i18n";

const ProductItem = ({ t, title, items, children, subTitle }) => {
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
            {t(title)}
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

export default withTranslation()(ProductItem);
