module.exports = {
  extends: ['eslint-config-react-app', 'plugin:prettier/recommended'],
  rules: {
    'max-len': ['error', 120],
    'prettier/prettier': [
      'error',
      {
        // Prettier default configuation overrides.
        singleQuote: true,
        jsxSingleQuote: true,
        arrowParens: 'avoid',
        trailingComma: 'all',
        // Note this is not the same behavior as eslint's "max-len":
        // https://prettier.io/docs/en/options.html#print-width
        printWidth: 120,
      },
      {
        // eslint-plugin-prettier will pick up prettier configurations further up
        // the tree:
        // https://github.com/prettier/eslint-plugin-prettier/issues/339
        usePrettierrc: false,
      },
    ],
  },
};
