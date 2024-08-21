import { injectVoerkaI18n } from '@voerkai18n/vue'
import { CONSTANT_LANGUAGE } from '@/constant'
import { computed } from 'vue'
export const useStoreLanguage = defineStore(
  'language',
  () => {
    const locale = ref('en')
    const antvLang = computed(() => {
      const tempKey = locale.value || 'en'
      const obj = CONSTANT_LANGUAGE[tempKey]
      return obj?.antvLang
    })
    const i18n = injectVoerkaI18n()
    function setI18n() {
      i18n.activeLanguage = locale.value
    }
    function changeLocale(key) {
      if (key) {
        locale.value = key
      } else {
        locale.value = locale.value === 'zh' ? 'en' : 'zh'
      }
      setI18n()
    }

    return { locale, antvLang, changeLocale, setI18n }
  },
  { persist: true }
)
