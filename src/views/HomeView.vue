<script setup>
import { ApiGetUserList } from '@/api'
const testApi = async () => {
  const res = await ApiGetUserList({ test: 'some' })
  console.log('🚀 ~ testApi ~ res:', res)
}
onMounted(() => {
  testApi()
})
</script>

<template>
  <main>
    <div>测试多语言</div>
    {{ t('你好，世界') }}
  </main>
</template>
