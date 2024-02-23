<script setup lang="ts">
import { FlipClock } from '@renderer/composables/flip-clock'
import { onMounted, watch } from 'vue'
import { useConfigStore } from '@renderer/store/useConfigStore'

import '@renderer/assets/css/flip-clock.scss'

const { config } = useConfigStore()

const instance = new FlipClock({
  el: '#hd',
  ...config.clock
})

watch(
  () => config.clock,
  () => {
    instance
      .destroy()
      .config({ el: '#hd', ...config.clock })
      .render()
  },
  { deep: true }
)
onMounted(() => {
  instance
    .config({
      el: '#hd',
      ...config.clock
    })
    .render()
})

const handleReset = () => {
  if (config.clock.type === 'clock') return
  instance
    .destroy()
    .config({
      el: '#hd',
      ...config.clock
    })
    .render()
}
</script>
<template>
  <main>
    <div
      id="hd"
      class="nodrag"
      :style="{
        '--bgColor': config.clock.bgColor || '#f00',
        '--color': config.clock.color || '#fff'
      }"
      @dblclick="handleReset"
    ></div>
  </main>
</template>
<style lang="scss"></style>
