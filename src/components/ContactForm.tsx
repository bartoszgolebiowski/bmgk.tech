import * as React from "react";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <form>
      <FormControl id="name">
        <FormLabel>Your name</FormLabel>
        <Input name="name" placeholder="John Snow" />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Your email</FormLabel>
        <Input name="email" type="email" placeholder="name@company.com" />
      </FormControl>
      <FormControl id="message">
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          placeholder="Hello, I am intrested in..."
          size="sm"
          resize="vertical"
        />
      </FormControl>
    </form>
  );
};

export default ContactForm;
