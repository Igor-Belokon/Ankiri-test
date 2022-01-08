module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:eslint/recommended",
    "plugin:react/recommended",
    "plugin:pritter/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
