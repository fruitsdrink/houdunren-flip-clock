<script setup lang="ts">
import { FlipClock } from '@renderer/composables/flip-clock'
import { onMounted } from 'vue'
import Footer from '@renderer/components/footer.vue'
import { useConfigStore } from '@renderer/store/useConfigStore'

import '@renderer/assets/css/flip-clock.scss'

const { config } = useConfigStore()

onMounted(() => {
  const clock = new FlipClock({
    el: '#hd',
    ...config.clock
  })
  clock.render()
})
</script>
<template>
  <main>
    <div
      id="hd"
      :style="{
        '--bgColor': config.clock.bgColor || '#f00',
        '--color': config.clock.color || '#fff'
      }"
    ></div>
    <Footer></Footer>
  </main>
</template>
<style lang="scss"></style>
