<template>
  <a-button @click="usLanguage.changeLocale()">{{
    usLanguage.locale === 'zh' ? 'English' : '简体中文'
  }}</a-button>
</template>
<script setup>
import { useStoreLanguage } from '@/stores/language'
const usLanguage = useStoreLanguage()
</script>
