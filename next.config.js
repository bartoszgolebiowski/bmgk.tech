const withImages = require("next-images");
const { nextI18NextRewrites } = require("next-i18next/rewrites");

module.exports = {
  rewrites: async () =>
    nextI18NextRewrites({
      en: "en",
      pl: "pl",
    }),
  ...withImages(),
};
