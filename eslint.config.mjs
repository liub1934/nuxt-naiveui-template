import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    unocss: true,
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: true,
      /**
       * Format HTML files
       * By default uses Prettier
       */
      html: true,
    },
    ignores: [],
  }),
  {
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/valid-attribute-name': 'off',
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
      'vue/html-comment-content-spacing': [
        'error',
        'always',
        {
          exceptions: [],
        },
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: ['/^n-/'], // 忽略 Naive UI 组件
          globals: [],
        },
      ],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 2,
          },
          multiline: {
            max: 1,
          },
        },
      ],
    },
  },
)
