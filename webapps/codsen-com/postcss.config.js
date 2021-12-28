/* eslint-disable node/global-require */
/* eslint-disable node/no-unpublished-require */
module.exports = {
  plugins: [
    require("postcss-nested-import"),
    require("postcss-nested"),
    require("postcss-preset-env"),
    require("postcss-reporter"),
    require("postcss-sorting"),
    require("autoprefixer"),
  ],
};
