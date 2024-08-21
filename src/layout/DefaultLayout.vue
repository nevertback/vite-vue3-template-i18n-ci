<script setup lang="ts">
import DcHeader from '@/layout/components/DcHeader.vue'
</script>

<template>
  <div class="flex flex-col h-[100vh]">
    <DcHeader />
    <div class="flex-1 overflow-hidden">
      <div class="h-full overflow-y-auto">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
