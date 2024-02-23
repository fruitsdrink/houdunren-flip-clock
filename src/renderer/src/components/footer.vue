<script lang="ts" setup>
import { useConfigStore } from '@renderer/store/useConfigStore'
import Navbar from '@renderer/components/Navbar.vue'

const { config } = useConfigStore()

defineOptions({
  name: ''
})
</script>

<template>
  <div
    class="bg-red-500 py-1 px-2 text-gray-100 text-center text-sm mt-2 rounded-md select-none flex justify-between items-center"
    :style="{
      backgroundColor: config.footer.bgColor,
      color: config.footer.color
    }"
  >
    <div :class="{ animate: config.footer.animate }">{{ config.footer.text }}</div>
    <Navbar class="opacity-100 hover:opacity-100" />
  </div>
</template>

<style lang="scss" scoped>
.animate {
  animation: move 5s infinite linear;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(270px - 100%));
  }
  100% {
    transform: translateX(0);
  }
}
</style>
