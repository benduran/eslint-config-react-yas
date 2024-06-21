import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import declareBadWordsPlugin from 'eslint-plugin-detect-bad-words';
import eslintPluginPrettierRecommend from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommend,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    name: 'eslint-config-react-yas-overrides',
    plugins: {
      'simple-import-sort': simpleImportSort,
      'detect-bad-words': declareBadWordsPlugin,
    },
    rules: {
      // Let the print width, below, take care of this
      'max-len': ['off'],
      'no-async-promise-executor': 'off',
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
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
