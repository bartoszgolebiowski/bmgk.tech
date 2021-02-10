import { Box, Center, Heading } from "@chakra-ui/react";
import * as React from "react";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

const Contact = () => {
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
            Contact us
          </Heading>
        </Center>
      </Box>
      <Box mt="2rem" mb="5rem">
        <Center>
          <Heading
            as="h3"
            size="3xl"
            isTruncated
            color="#ab47bc"
            height="10vh"
            id="emailContact"
          >
            Email
          </Heading>
        </Center>
      </Box>
      <ContactForm />
      <Box mt="2rem" mb="5rem">
        <Center>
          <Heading
            as="h4"
            size="1xl"
            isTruncated
            color="#ab47bc"
            height="5vh"
            id="callUs"
          >
            Additional information
          </Heading>
        </Center>
      </Box>
      <ContactDetails />
    </Box>
  );
};

export default Contact;
