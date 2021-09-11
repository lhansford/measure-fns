module.exports = {
  extends: ['eslint-config-lukehansford-base', 'plugin:jest-formatting/recommended'],
  plugins: ['jest-formatting'],
  overrides: [
    {
      files: ['*.test.tsx', '*.test.ts'],
      rules: {
        'no-magic-numbers': 'off',
      },
    },
  ],
};
