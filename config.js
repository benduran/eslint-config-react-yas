import { react as base } from '@cprussin/eslint-config';
import eslintConfigPrettier from 'eslint-config-prettier';
import declareBadWordsPlugin from 'eslint-plugin-detect-bad-words';
import eslintPluginPrettierRecommend from 'eslint-plugin-prettier/recommended';

const files = ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'];

const baselineRule = [
  ...base,
  eslintConfigPrettier,
  eslintPluginPrettierRecommend,
  {
    files,
    plugins: {
      'detect-bad-words': declareBadWordsPlugin,
    },
    rules: {
      'detect-bad-words/in-code': 'error',
      'detect-bad-words/in-comment': 'error',
      'turbo/no-undeclared-env-vars': 'off',
      'unicorn/filename-case': 'off',
      'n/no-unpublished-import': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-null': 'off',
      'unicord/prefer-spread': 'off',
    },
  },
];

export const standalone = [
  ...baselineRule,
  {
    files,
    rules: {
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
    },
  },
];

export const respectPrettierConfig = [...baselineRule];

export default standalone;
