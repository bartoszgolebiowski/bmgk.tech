import * as React from "react";
import {
  Box,
  Button,
  Field,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next/pages";

import { subscribeToContactPrefill } from "../utils/contactPrefill";
import { MailIcon } from "./Icons";
import { toaster } from "./Toaster";

type FormValues = {
  name: string;
  email: string;
  message: string;
  company: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  message: "",
  company: "",
};

const focusStyles = {
  borderColor: "brand.500",
  boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
};

const ContactForm = () => {
  const { t } = useTranslation();

  const [values, setValues] = React.useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const messageRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(
    () =>
      subscribeToContactPrefill((message) => {
        setValues((previous) => ({ ...previous, message }));
        setErrors((previous) => ({ ...previous, message: undefined }));

        window.requestAnimationFrame(() => {
          messageRef.current?.focus({ preventScroll: true });
        });
      }),
    []
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues((previous) => ({ ...previous, [name]: value }));

    if (errors[name as keyof FormValues]) {
      setErrors((previous) => ({ ...previous, [name]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = t("Form name required");
    }

    if (!EMAIL_PATTERN.test(values.email.trim())) {
      nextErrors.email = t("Form email invalid");
    }

    if (values.message.trim().length < 10) {
      nextErrors.message = t("Form message required");
    }

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          company: values.company,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      toaster.create({
        title: t("Email was sent"),
        description: t("Thank you for contacting us!"),
        type: "success",
        duration: 9000,
        closable: true,
      });

      setValues(INITIAL_VALUES);
    } catch (error) {
      toaster.create({
        title: t("Email was not sent"),
        description: t("Try again!"),
        type: "error",
        duration: 9000,
        closable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      asChild
      bg="white"
      borderWidth="1px"
      borderColor="ink.200"
      borderRadius="3xl"
      boxShadow="card"
      p={{ base: 6, md: 8 }}
    >
      <form onSubmit={handleSubmit} noValidate>
        <Stack gap={5}>
          <Field.Root invalid={Boolean(errors.name)} required>
            <Field.Label>
              {t("Your name")}
              <Field.RequiredIndicator />
            </Field.Label>
            <Input
              name="name"
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              value={values.name}
              onChange={handleChange}
              placeholder={t("Your name placeholder")}
              autoComplete="name"
              size="lg"
              borderRadius="lg"
              borderColor="ink.200"
              _focus={focusStyles}
              _placeholder={{ color: "ink.400" }}
            />
            {errors.name && (
              <Field.ErrorText id="contact-name-error">
                {errors.name}
              </Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root invalid={Boolean(errors.email)} required>
            <Field.Label>
              {t("Your email")}
              <Field.RequiredIndicator />
            </Field.Label>
            <Input
              name="email"
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder={t("Your email placeholder")}
              autoComplete="email"
              inputMode="email"
              size="lg"
              borderRadius="lg"
              borderColor="ink.200"
              _focus={focusStyles}
              _placeholder={{ color: "ink.400" }}
            />
            {errors.email && (
              <Field.ErrorText id="contact-email-error">
                {errors.email}
              </Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root invalid={Boolean(errors.message)} required>
            <Field.Label>
              {t("Message")}
              <Field.RequiredIndicator />
            </Field.Label>
            <Textarea
              ref={messageRef}
              name="message"
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
              value={values.message}
              onChange={handleChange}
              placeholder={t("Message placeholder")}
              rows={6}
              resize="vertical"
              borderRadius="lg"
              borderColor="ink.200"
              _focus={focusStyles}
              _placeholder={{ color: "ink.400" }}
            />
            {errors.message && (
              <Field.ErrorText id="contact-message-error">
                {errors.message}
              </Field.ErrorText>
            )}
          </Field.Root>

          {/* Honeypot: invisible for humans, filled in by some bots. */}
          <Box
            position="absolute"
            left="-9999px"
            w="1px"
            h="1px"
            overflow="hidden"
            aria-hidden="true"
          >
            <label htmlFor="contact-company">Company</label>
            <input
              id="contact-company"
              name="company"
              value={values.company}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </Box>

          <Button
            type="submit"
            size="lg"
            w="100%"
            bg="brand.600"
            color="white"
            borderRadius="full"
            display="inline-flex"
            gap={2}
            _hover={{ bg: "brand.700" }}
            loading={isSubmitting}
            loadingText={t("Sending")}
          >
            <MailIcon width={18} height={18} />
            {t("Send Email")}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ContactForm;
