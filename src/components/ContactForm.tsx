import * as React from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { TFunction } from "next-i18next";

import { withTranslation } from "../../i18n";

const success = (t: TFunction) => ({
  title: t("Email was sent"),
  description: t("Thank you for contacting us!"),
  status: "success" as "success",
  duration: 9000,
  isClosable: true,
});

const failure = (t: TFunction) => ({
  title: t("Email was not sent"),
  description: t("Try again!"),
  status: "error" as "error",
  duration: 9000,
  isClosable: true,
});

const ContactForm = ({ t }) => {
  const toast = useToast();
  const form = React.useRef<HTMLFormElement | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    const name = event.target.name.value;
    //@ts-ignore
    const email = event.target.email.value;
    //@ts-ignore
    const message = event.target.message.value;

    fetch("api/contact", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((res) => {
        if (res.ok) {
          toast(success(t));
          form.current.reset();
        } else {
          toast(failure(t));
        }
      })
      .catch(() => toast(failure(t)));
  };

  return (
    <form ref={form} onSubmit={onSubmit}>
      <FormControl id="name">
        <FormLabel>{t("Your name")}</FormLabel>
        <Input name="name" placeholder={t("Your name placeholder")} required />
      </FormControl>
      <FormControl id="email">
        <FormLabel>{t("Your email")}</FormLabel>
        <Input
          name="email"
          type="email"
          placeholder={t("Your email placeholder")}
          required
        />
      </FormControl>
      <FormControl id="message">
        <FormLabel>{t("Message")}</FormLabel>
        <Textarea
          name="message"
          placeholder={t("Message placeholder")}
          size="sm"
          resize="vertical"
          required
        />
      </FormControl>
      <Flex direction="row" justifyContent="space-around" mt="5rem">
        <Button
          leftIcon={<EmailIcon />}
          size="lg"
          type="submit"
          color="#ab47bc"
          variant="solid"
        >
          {t("Send Email")}
        </Button>
      </Flex>
    </form>
  );
};

export default withTranslation()(ContactForm);
