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
     * Enforce curly braces for all control statements.
     *
     * @see https://eslint.org/docs/latest/rules/curly
     */
    'curly': ['error', 'all'],

    /**
     * Enforce self-closing tags if no children.
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

    /**
     * Enfore a maximum of 3 attributes per line if single line,
     * and 1 attribute per line if multiline.
     *
     * @see https://eslint.vuejs.org/rules/max-attributes-per-line.html
     */
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: 1,
    }],

    /**
     * Enfore camelCase attribute names.
     *
     * @see https://eslint.vuejs.org/rules/attribute-hyphenation.html
     */
    'vue/attribute-hyphenation': ['error', 'never'],

    /**
     * Enforce camelCase event names.
     *
     * The autofix is not safe for Vue 2,
     * we recommend to fix it manually.
     *
     * @see https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
     */
    'vue/v-on-event-hyphenation': ['error', 'never', {
      autofix: false,
    }],
  },
})
