import * as React from "react";

import { Box, Center, Heading, List, ListItem } from "@chakra-ui/react";

const ContactDetails = () => {
  return (
    <List spacing={3}>
      <ListItem>
        <strong>Company name</strong>: BMGK
      </ListItem>
      <ListItem>
        <strong>Email</strong>: mariusz.kaleta@bmgk.tech
      </ListItem>
    </List>
  );
};

export default ContactDetails;
