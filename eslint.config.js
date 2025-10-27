export default {
  files: ['src/**/*.js'],
  ignores: ['node_modules/**', 'dist/**', '*.config.js'],
  languageOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    globals: {
      window: 'readonly',
      document: 'readonly',
      console: 'readonly',
      fetch: 'readonly'
    }
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off'
  }
};
