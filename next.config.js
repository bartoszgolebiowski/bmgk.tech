const withImages = require("next-images");
const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
  en: "en",
  pl: "pl",
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  ...withImages(),
};
