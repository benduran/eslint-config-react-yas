import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import declareBadWordsPlugin from 'eslint-plugin-detect-bad-words';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommend from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommend,
  jsxA11yPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.serviceworker,
        ...globals.es2024,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    name: 'eslint-config-react-yas-overrides',
    plugins: {
      'detect-bad-words': declareBadWordsPlugin,
      // @ts-expect-error - typings are a mismatch between the tseslint and the react plugin
      react: reactPlugin,
      'react-hooks': fixupPluginRules(reactHooksPlugin),
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
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
