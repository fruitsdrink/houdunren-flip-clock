<script lang="ts" setup>
import { useConfigStore } from '@renderer/store/useConfigStore'

const { config } = useConfigStore()

defineOptions({
  name: ''
})
</script>

<template>
  <div
    class="bg-red-500 text-gray-100 text-center mt-2 rounded-md select-none"
    :style="{
      backgroundColor: config.footer?.bgColor,
      color: config.footer?.color
    }"
  >
    水果饮料
  </div>
</template>

<style lang="scss" scoped></style>
