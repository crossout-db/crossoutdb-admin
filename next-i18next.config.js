const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "ru", "zh"],
  },
  localePath: path.resolve("./public/locales"),
};
