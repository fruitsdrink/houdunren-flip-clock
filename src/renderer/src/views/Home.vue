<script setup lang="ts">
import { FlipClock } from '@renderer/composables/flip-clock'
import { onMounted } from 'vue'
import '@renderer/assets/css/flip-clock.scss'

onMounted(() => {
  const clock = new FlipClock({
    el: '#hd',
    type: 'clock',
    style: 'base',
    timing: {
      second: 10
    }
  })
  clock.render()
})
</script>
<template>
  <main class="drag">
    <div id="hd"></div>
  </main>
</template>
<style lang="scss"></style>
@renderer/composables/flip-clock
