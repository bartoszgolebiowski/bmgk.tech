/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl"],
    localeDetection: false,
  },
  defaultNS: "common",
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/static/locales")
      : "/static/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
