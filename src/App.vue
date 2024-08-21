<script setup>
import DefaultLayout from '@/layout/DefaultLayout.vue'
import { useStoreLanguage } from '@/stores/language'
const usLanguage = useStoreLanguage()
usLanguage.setI18n()
</script>

<template>
  <a-config-provider :locale="usLanguage.antvLang">
    <DefaultLayout> <RouterView /></DefaultLayout>
  </a-config-provider>
</template>
