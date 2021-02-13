const NextI18Next = require("next-i18next").default;
const path = require("path");

module.exports = new NextI18Next({
  otherLanguages: ["en", "pl"],
  defaultNS: "common",
  namespacesRequired: ["common"],
  localeSubpaths: {
    en: "en",
  },
  localePath: path.resolve("./public/static/locales"),
});
