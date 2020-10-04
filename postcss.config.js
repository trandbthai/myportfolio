/* eslint-disable global-require */

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./src/**/*.js", //
    "./public/index.html",
  ],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  whitelistPatterns: [/Mui\w+/],
  whitelistPatternsChildren: [/Mui\w+/],
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production"
      ? [purgecss, require("cssnano")]
      : []),
  ],
};
