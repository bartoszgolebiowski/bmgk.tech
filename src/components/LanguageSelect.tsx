import * as React from "react";
import { Button, Select, Stack } from "@chakra-ui/react";

import useMobileView from "../utils/hooks/useMobileView";
import { withTranslation } from "../../i18n";

const noop = () => {};

const LanguageSelect = ({ i18n, onSubmit = noop }) => {
  const [isMobileView] = useMobileView();
  const { otherLanguages } = i18n.options;

  const handleChangeLangugage = (language: string) => {
    i18n.changeLanguage(language);
    history.replaceState(
      "",
      document.title,
      window.location.origin + `/${language}`
    );
    onSubmit();
  };

  if (isMobileView === true) {
    return (
      <Stack spacing={4} direction="row" align="">
        {otherLanguages.map((language: string) => (
          <Button
            key={language}
            color="#ab47bc"
            size="xs"
            onClick={() => handleChangeLangugage(language)}
          >
            {language.toUpperCase()}
          </Button>
        ))}
      </Stack>
    );
  }

  return (
    <Select
      value={i18n.language}
      variant="unstyled"
      onChange={(e) => handleChangeLangugage(e.target.value)}
    >
      {otherLanguages.map((language: string) => (
        <option key={language} value={language}>
          {language.toUpperCase()}
        </option>
      ))}
    </Select>
  );
};

export default withTranslation()(LanguageSelect);
