import * as React from "react";
import { List, ListItem } from "@chakra-ui/react";
import { withTranslation } from "../../i18n";

const ContactDetails = ({ t }) => {
  return (
    <List spacing={3}>
      <ListItem>
        <strong>{t("Company name")}</strong>: BMGK
      </ListItem>
      <ListItem>
        <strong>{t("Email")}</strong>: mariusz.kaleta@bmgk.tech
      </ListItem>
    </List>
  );
};

export default withTranslation()(ContactDetails);
