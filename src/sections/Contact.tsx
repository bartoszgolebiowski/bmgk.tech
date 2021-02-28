import * as React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";

import ContactForm from "../components/ContactForm";
import useCurrentSection from "../utils/hooks/useCurrentSection";
import { useTranslation } from "../../i18n";

const Contact = () => {
  const { t } = useTranslation();
  const { ref } = useCurrentSection("contact");

  return (
    <Box
      ref={ref}
      mt="2rem"
      mb="10rem"
      as="section"
      flexDirection="column"
      id="contact"
      css={{ scrollMarginTop: "100px" }}
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
};

export default Contact;
