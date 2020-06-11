module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    "node": true
  },
  rules: {
    "complexity": [2, 6],
  },
  globals: {
    document: true
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
