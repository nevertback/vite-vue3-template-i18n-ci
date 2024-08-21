import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import Voerkai18nPlugin from '@voerkai18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-vue3-template-i18n-ci/',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      imports: [
        // 需要自动导入的插件，自定义导入的API
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core'
      ],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true,
          importStyle: false // css in js
        })
      ]
    }),
    Inspect(), // 可选
    Voerkai18nPlugin({
      autoImport: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
