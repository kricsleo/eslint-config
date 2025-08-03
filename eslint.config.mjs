import antfu from '@antfu/eslint-config'

/**
 * Run `pnpm eslint --inspect-config` to inspect the configuration visually.
 *
 * @see https://eslint.org/blog/2024/04/eslint-config-inspector/
 */
export default antfu({
  vue: true,

  rules: {
    /**
     * It's safe to disable this rule,
     * as we are always using "Vue", not raw html.
     */
    'vue/html-self-closing': 'off',
  },
})
