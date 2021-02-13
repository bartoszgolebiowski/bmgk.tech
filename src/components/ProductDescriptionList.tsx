import * as React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import { withTranslation } from "../../i18n";

const ProductDescriptionList = ({ t, items }) => {
  return (
    <UnorderedList>
      {items.map((item) => (
        <ListItem key={item}>{t(item)}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default withTranslation()(ProductDescriptionList);
