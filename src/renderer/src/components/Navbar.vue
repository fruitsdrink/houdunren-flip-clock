<template>
  <main class="nodrag rounded-md text-sm flex justify-between items-center gap-1">
    <!-- <div class="cursor-pointer" @click="handleToggle">切换 -- {{ config.clock.type }}</div> -->
    <div @click="handleToggle">
      <Time
        v-if="config.clock.type === 'clock'"
        theme="outline"
        size="20"
        :fill="config.footer?.color"
      />
      <alarm-clock v-else theme="outline" size="20" :fill="config.footer?.color" />
    </div>
    <div class="flex gap-1">
      <RouterLink v-if="$route.name === 'config'" :to="{ name: 'clock' }">时钟</RouterLink>
      <RouterLink v-else :to="{ name: 'config' }">配置</RouterLink>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useConfigStore } from '@renderer/store/useConfigStore'
import { Time, AlarmClock } from '@icon-park/vue-next'
import { useRouter } from 'vue-router'
const { config } = useConfigStore()
const router = useRouter()

defineOptions({
  name: 'Navbar'
})

const handleToggle = () => {
  config.clock.type = config.clock.type === 'clock' ? 'timing' : 'clock'
  router.push({ name: 'clock' })
}
</script>

<style lang="scss" scoped></style>
