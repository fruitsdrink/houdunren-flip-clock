<script setup lang="ts">
import { FlipClock } from '@renderer/composables/flip-clock'
import { onMounted } from 'vue'
import '@renderer/assets/flip-clock.scss'

onMounted(() => {
  const clock = new FlipClock({
    el: '#hd',
    type: 'timing',
    style: 'base',
    timing: {
      second: 100
    }
  })
  clock.render()
})
</script>
<template>
  <div id="hd"></div>
</template>
<style lang="scss"></style>
@renderer/composables/flip-clock
