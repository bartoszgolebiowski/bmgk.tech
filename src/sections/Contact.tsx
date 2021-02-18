import * as React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";

import ContactForm from "../components/ContactForm";
import { useTranslation } from "../../i18n";

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useTranslation();
  return (
    <Box
      mt="2rem"
      mb="10rem"
      as="section"
      flexDirection="column"
      id="contact"
      ref={ref}
    >
      <Box mt="2rem" mb="5rem">
        <Center>
          <Heading as="h2" size="3xl" isTruncated color="#43A047" height="10vh">
            {t("Contact us")}
          </Heading>
        </Center>
      </Box>
      <ContactForm />
    </Box>
  );
});

export default Contact;
