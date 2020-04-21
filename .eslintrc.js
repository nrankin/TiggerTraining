module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react/display-name': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/prop-types': 'warn',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/sort-styles': 'warn',
    'react-native/split-platform-components': 'error',
    'react-native/no-raw-text': 'off',
    semi: 'never',
  },
}
