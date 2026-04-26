// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from 'nuxt/schema'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/icon', '@unocss/nuxt', '@bg-dev/nuxt-naiveui'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  typescript: {
    typeCheck: false,
  },
  hooks: {
    'pages:extend': function (pages) {
      function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove: NuxtPage[] = []
        for (const page of pages) {
          if (page.file?.match(pattern)) {
            pagesToRemove.push(page)
          }
          else {
            removePagesMatching(pattern, page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }
      // 移除pages中components 和 modules目录自动生成的路由
      removePagesMatching(/\/(components|modules)\//, pages)
    },
  },
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  icon: {
    size: '1.2em',
    serverBundle: {
      collections: ['ph'],
    },
    customCollections: [
      {
        prefix: 'local',
        dir: './app/assets/icons',
        // if you want to include all the icons in nested directories:
        // recursive: true,
      },
    ],
  },
  naiveui: {
    colorModePreference: 'system',
  },
})
