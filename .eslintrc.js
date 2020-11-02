module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    process: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  rules: {},
}
