import { base } from '@cprussin/eslint-config';
import eslintConfigPrettier from 'eslint-config-prettier';
import declareBadWordsPlugin from 'eslint-plugin-detect-bad-words';
import eslintPluginPrettierRecommend from 'eslint-plugin-prettier/recommended';

export const standalone = [
  ...base,
  eslintConfigPrettier,
  eslintPluginPrettierRecommend,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      'detect-bad-words': declareBadWordsPlugin,
    },
    rules: {
      'detect-bad-words/in-code': 'error',
      'detect-bad-words/in-comment': 'error',
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          jsxSingleQuote: true,
          // Note this is not the same behavior as eslint's "max-len":
          // https://prettier.io/docs/en/options.html#print-width
          printWidth: 120,
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
      'turbo/no-undeclared-env-vars': 'off',
    },
  },
];

export const respectPrettierConfig = [
  ...base,
  eslintConfigPrettier,
  eslintPluginPrettierRecommend,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      'detect-bad-words': declareBadWordsPlugin,
    },
    rules: {
      'detect-bad-words/in-code': 'error',
      'detect-bad-words/in-comment': 'error',
    },
  },
];

export default standalone;
