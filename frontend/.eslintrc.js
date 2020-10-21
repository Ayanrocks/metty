module.exports = {
  env: {
    browser: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": "off",
  },
};
