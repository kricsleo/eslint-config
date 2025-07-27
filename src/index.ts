import eslint from '@antfu/eslint-config'

export function defineConfig(): ReturnType<typeof eslint> {
  return eslint({
    rules: {

    /** Basic */
    // @see https://eslint.org/docs/latest/rules/curly
    'curly': ['error', 'all'],


    /** Vue */
    // @see https://eslint.vuejs.org/rules/max-attributes-per-line.html
    'vue/max-attributes-per-line': [
      'error',
      { singleline: { max: 3 } },
    ],
    }
  })
}
