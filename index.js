module.exports = {
  extends: [
    '@antfu/eslint-config',
  ],
  rules: {
    // @see https://eslint.vuejs.org/rules/max-attributes-per-line.html
    'vue/max-attributes-per-line': [
      'error',
      { singleline: { max: 3 } },
    ],
  }
}