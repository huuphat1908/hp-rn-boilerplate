module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:jest/all'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  env: {
    'jest/global': true,
  },
  settings: {
    jest: {
      version: require('jest/package.json').version,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        semi: 0,
        '@typescript-eslint/semi': 0,
        'prettier/prettier': 0,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 0,
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ],
};
