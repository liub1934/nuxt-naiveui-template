import { createRemToPxProcessor } from '@unocss/preset-wind4/utils'
import {
  defineConfig,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { generateColorCombinations } from './app/utils/unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
        theme: {
          process: createRemToPxProcessor(4),
        },
      },
    }),
  ],
  theme: {
    colors: {
      // 生成如下颜色数据
      // 'primary': 'rgba(var(--n-primary-color))'
      // 'primary-1': 'rgba(var(--n-primary-color-1))',
      // ...其他
      ...generateColorCombinations(),
    },
  },
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'absolute-center':
      'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
    'absolute-x-center': 'absolute left-1/2 -translate-x-1/2',
    'absolute-y-center': 'absolute top-1/2 -translate-y-1/2',
  },
  rules: [
    [
      'base-bg',
      {
        'background-color': 'rgba(var(--n-body-color))',
      },
    ],
  ],
  postprocess: [createRemToPxProcessor(4)],
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
