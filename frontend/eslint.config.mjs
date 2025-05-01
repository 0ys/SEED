import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

import tseslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'public/',
      '.prettierrc.cjs',
      'next.config.mjs',
      'eslint.config.mjs',
      '*.config.mjs',
      '*.config.js',
    ],
  },
  ...compat.extends(
    'airbnb',
    'airbnb-typescript',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
      ecmaVersion: 'latest',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettier,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-use-before-define': 'off',
      'import/prefer-default-export': 'off',
      'jsx-a11y/label-has-associated-control': [
        2,
        {
          labelAttributes: ['htmlFor'],
        },
      ],
      'no-alert': 'off',
      'no-console': 'off',
      'no-use-before-define': 'off',
      'no-useless-catch': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'react-hooks/exhaustive-deps': 'off',
      'react/function-component-definition': [
        2,
        {
          namedComponents: ['arrow-function', 'function-declaration'],
        },
      ],
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.ts', '.tsx'],
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
    },
  },
];

export default eslintConfig;
