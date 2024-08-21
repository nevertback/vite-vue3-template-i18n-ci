<template>
  <header class="dc-header flex items-center h-[80px] px-6 border-b sticky top-0 shrink-0">
    <img alt="Vue logo" class="logo size-9" src="@/assets/logo.svg" width="125" height="125" />

    <div class="flex-1 flex items-center ml-5">
      <nav class="flex-1 flex gap-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <div>
        <ChangeLanguage />
      </div>
    </div>
  </header>
</template>
<script setup>
import ChangeLanguage from '@/components/ChangeLanguage.vue'
</script>
