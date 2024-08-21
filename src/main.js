import './assets/scss/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 导入插件
import i18nPlugin from '@voerkai18n/vue'
// 导入当前作用域
import { i18nScope } from './languages'

import App from './App.vue'
import router from './router'

// 等待i18nScope初始化完成
i18nScope.ready(() => {
  const app = createApp(App)
  // 应用插件
  app.use(i18nPlugin, {
    i18nScope
  })
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)

  app.use(pinia)
  app.use(router)

  app.mount('#app')
})
