module.exports = {
  extends: ['eslint-config-fishbrain', 'plugin:jest-formatting/recommended'],
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
