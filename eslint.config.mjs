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
     * Always enforce self-closing tags if no children.
     *
     * (It's unsafe in raw html for void elements (e.g. `<img>`/`<br>`),
     * but we are always using Vue or React, so it's always fine.)
     *
     * TODO: `<img></img>` will be auto-fixed as `<img /></img>`,
     * THIS IS NOT CURRECT! We should fix this within the eslint plugin.
     *
     * @see https://eslint.vuejs.org/rules/html-self-closing.html
     */
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
  },
})
