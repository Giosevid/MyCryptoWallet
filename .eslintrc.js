module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  plugins: ['react', 'react-native', 'unused-imports'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    'react-native/react-native': true,
  },
  rules: {
    complexity: 'off',
    'import/order': ['error', {'newlines-between': 'always'}],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react-native/sort-styles': [
      'error',
      'asc',
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false,
      },
    ],
  },
};
