module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'no-useless-escape': 'off',
    'no-console': 'off',
    'linebreak-style': 'off',
    'no-use-before-define': 'off',
    'camelcase': 'off',
    'quote-props': 'off',
    'no-param-reassign': 'off',
  },
};
