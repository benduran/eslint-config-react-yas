module.exports = {
  extends: ['eslint-config-react-app', 'plugin:prettier/recommended'],
  plugins: ['detect-bad-words', 'simple-import-sort'],
  rules: {
    // Let the print width, below, take care of this
    'max-len': ['off'],
    'no-var': ['error'],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        jsxSingleQuote: true,
        // Note this is not the same behavior as eslint's "max-len":
        // https://prettier.io/docs/en/options.html#print-width
        printWidth: 120,
        // Prettier default configuation overrides.
        singleQuote: true,
        trailingComma: 'all',
      },
      {
        // eslint-plugin-prettier will pick up prettier configurations further up
        // the tree:
        // https://github.com/prettier/eslint-plugin-prettier/issues/339
        usePrettierrc: false,
      },
    ],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'detect-bad-words/in-code': 'error',
    'detect-bad-words/in-comment': 'error',
  },
};
