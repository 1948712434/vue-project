module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
  },
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  "rules": {
    // Override default options
    "comma-dangle": [
      "error",
      "always",],
    "indent": [
      "error",
      2,],
    "no-cond-assign": [
      "error",
      "always",],

    // Disable now, but enable in the future
    "one-var": "off", // ["error", "never"]

    // Disable
    "init-declarations": "off",
    "no-console": "off",
    "no-inline-comments": "off",
  },
  
};
