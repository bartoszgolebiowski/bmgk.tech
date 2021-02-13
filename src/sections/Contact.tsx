import * as React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";

import ContactForm from "../components/ContactForm";
import { withTranslation } from "../../i18n";

const Contact = ({ t }) => {
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
            id="contact"
          >
            {t("Contact us")}
          </Heading>
        </Center>
      </Box>
      <ContactForm />
    </Box>
  );
};

export default withTranslation()(Contact);
